(function () {
  function cardHtml(project) {
    var tags = (project.tags || [])
      .map(function (tag) { return '<span class="project-tag">' + tag + '</span>'; })
      .join("");
    var yearTag = project.year ? '<span class="project-tag project-tag-year">' + project.year + '</span>' : "";

    return (
      '<div class="project-card">' +
        '<div class="project-thumb">' +
          '<img src="' + project.thumbnail + '" alt="' + project.title + '" ' +
            'onerror="this.parentNode.classList.add(\'project-thumb-fallback\'); this.remove();">' +
        '</div>' +
        '<div class="project-body">' +
          '<div class="project-tags">' + tags + yearTag + '</div>' +
          '<h3 class="project-title">' + project.title + '</h3>' +
          '<p class="project-blurb">' + project.blurb + '</p>' +
          '<button type="button" class="btn btn-outline-primary btn-sm project-view-btn" ' +
            'data-toggle="modal" data-target="#project-modal" data-project-id="' + project.id + '">' +
            'View project <i class="fa fa-external-link" aria-hidden="true"></i>' +
          '</button>' +
        '</div>' +
      '</div>'
    );
  }

  function renderGrid(containerId, projects) {
    var container = document.getElementById(containerId);
    if (!container) return;
    if (!projects || !projects.length) return;
    container.innerHTML = projects.map(cardHtml).join("");
  }

  renderGrid("projects-grid", typeof PROJECTS !== "undefined" ? PROJECTS : []);
  renderGrid("student-projects-grid", typeof STUDENT_PROJECTS !== "undefined" ? STUDENT_PROJECTS : []);

  var allProjects = [].concat(
    typeof PROJECTS !== "undefined" ? PROJECTS : [],
    typeof STUDENT_PROJECTS !== "undefined" ? STUDENT_PROJECTS : []
  );

  var modal = document.getElementById("project-modal");
  if (modal && window.jQuery) {
    jQuery(modal).on("show.bs.modal", function (event) {
      var button = event.relatedTarget;
      var projectId = button.getAttribute("data-project-id");
      var project = allProjects.filter(function (p) { return p.id === projectId; })[0];
      if (!project) return;

      modal.querySelector(".modal-title").textContent = project.title;
      modal.querySelector(".modal-open-new-tab").href = project.linkUrl || project.embedUrl;

      var frame = modal.querySelector(".modal-embed-frame");
      if (project.embedUrl) {
        frame.src = project.embedUrl;
        if (project.allow) frame.setAttribute("allow", project.allow);
        frame.style.display = "";
      } else {
        frame.style.display = "none";
      }
    });

    jQuery(modal).on("hidden.bs.modal", function () {
      var frame = modal.querySelector(".modal-embed-frame");
      frame.src = "";
    });
  }
})();
