// Renders media cards for the Interests and Awards sections. Data comes from
// interests-data.js and awards-data.js. Thumbnail/carousel rendering is
// shared with projects.js via media-card.js.

(function () {
  function cardHtml(item) {
    var link = item.linkUrl
      ? '<a href="' + item.linkUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm project-view-btn">' +
          (item.linkText || "Read more") + ' <i class="fa fa-external-link" aria-hidden="true"></i></a>'
      : "";

    return (
      '<div class="project-card">' +
        MediaCard.mediaHtml(item) +
        '<div class="project-body">' +
          MediaCard.tagsHtml(item) +
          '<h3 class="project-title">' + item.title + '</h3>' +
          '<p class="project-blurb">' + item.blurb + '</p>' +
          link +
        '</div>' +
      '</div>'
    );
  }

  function renderMediaCards(containerId, items) {
    var container = document.getElementById(containerId);
    if (!container || !items || !items.length) return;
    container.innerHTML = items.map(cardHtml).join("");
    MediaCard.initCarousels(container);
  }

  renderMediaCards("interests-grid", typeof INTERESTS !== "undefined" ? INTERESTS : []);
  renderMediaCards("awards-grid", typeof AWARDS !== "undefined" ? AWARDS : []);

  // Lightbox: click any card image (projects, students, interests, awards)
  // to expand it centered on screen, with an X (or Esc / backdrop click) to close.
  function openLightbox(src, alt) {
    var overlay = document.createElement("div");
    overlay.className = "image-lightbox";
    overlay.innerHTML =
      '<button type="button" class="image-lightbox-close" aria-label="Close">&times;</button>' +
      '<img src="' + src + '" alt="' + (alt || "") + '">';

    function close() {
      overlay.remove();
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
    }

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.closest(".image-lightbox-close")) close();
    });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(overlay);
  }

  document.addEventListener("click", function (e) {
    var img = e.target.closest(".project-thumb img");
    if (!img) return;
    openLightbox(img.src, img.alt);
  });
})();
