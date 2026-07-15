(function () {
  function cardHtml(project) {
    return (
      '<div class="project-card">' +
        MediaCard.mediaHtml(project) +
        '<div class="project-body">' +
          MediaCard.tagsHtml(project) +
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
    MediaCard.initCarousels(container);
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
      var newTabLink = modal.querySelector(".modal-open-new-tab");
      newTabLink.href = project.linkUrl || project.embedUrl;
      newTabLink.innerHTML = (project.linkText || "Open in new tab") + ' <i class="fa fa-external-link" aria-hidden="true"></i>';

      var frame = modal.querySelector(".modal-embed-frame");
      var fallback = modal.querySelector(".modal-embed-fallback");
      if (project.embedUrl) {
        frame.src = project.embedUrl;
        if (project.allow) frame.setAttribute("allow", project.allow);
        frame.style.display = "";
        fallback.style.display = "none";
      } else {
        frame.style.display = "none";
        fallback.style.display = "block";
      }
    });

    jQuery(modal).on("hidden.bs.modal", function () {
      var frame = modal.querySelector(".modal-embed-frame");
      frame.src = "";
    });
  }
})();
