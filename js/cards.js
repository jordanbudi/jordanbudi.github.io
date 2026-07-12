// Renders media cards (with optional image carousels) for the Interests and
// Awards sections. Data comes from interests-data.js and awards-data.js.
// A card with 2+ images gets an auto-revolving carousel with arrows and dots;
// a card with 1 image is a static thumbnail.

(function () {
  var CAROUSEL_INTERVAL_MS = 4000;

  function slideHtml(src, title) {
    return (
      '<div class="carousel-slide">' +
        '<img src="' + src + '" alt="' + title + '" loading="lazy" ' +
          'onerror="this.parentNode.classList.add(\'slide-missing\'); this.remove();">' +
      '</div>'
    );
  }

  function cardHtml(item) {
    var images = item.images || [];
    var multi = images.length > 1;

    var slides = images.map(function (src) { return slideHtml(src, item.title); }).join("");
    if (!images.length) slides = '<div class="carousel-slide slide-missing"></div>';

    var controls = "";
    if (multi) {
      var dots = images.map(function (_, i) {
        return '<button type="button" class="carousel-dot' + (i === 0 ? " active" : "") + '" data-slide="' + i + '" aria-label="Image ' + (i + 1) + '"></button>';
      }).join("");
      controls =
        '<button type="button" class="carousel-arrow carousel-prev" aria-label="Previous image">&#10094;</button>' +
        '<button type="button" class="carousel-arrow carousel-next" aria-label="Next image">&#10095;</button>' +
        '<div class="carousel-dots">' + dots + '</div>';
    }

    var tags = (item.tags || [])
      .map(function (tag) { return '<span class="project-tag">' + tag + '</span>'; })
      .join("");
    var yearTag = item.year ? '<span class="project-tag project-tag-year">' + item.year + '</span>' : "";

    var link = item.linkUrl
      ? '<a href="' + item.linkUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm project-view-btn">' +
          (item.linkText || "Read more") + ' <i class="fa fa-external-link" aria-hidden="true"></i></a>'
      : "";

    return (
      '<div class="project-card">' +
        '<div class="project-thumb card-carousel"' + (multi ? ' data-carousel' : '') + '>' +
          '<div class="carousel-track">' + slides + '</div>' + controls +
        '</div>' +
        '<div class="project-body">' +
          '<div class="project-tags">' + tags + yearTag + '</div>' +
          '<h3 class="project-title">' + item.title + '</h3>' +
          '<p class="project-blurb">' + item.blurb + '</p>' +
          link +
        '</div>' +
      '</div>'
    );
  }

  function initCarousel(root) {
    var track = root.querySelector(".carousel-track");
    var dots = root.querySelectorAll(".carousel-dot");
    var count = track.children.length;
    var index = 0;
    var timer = null;

    function goTo(i) {
      index = (i + count) % count;
      track.style.transform = "translateX(-" + (index * 100) + "%)";
      dots.forEach(function (dot, d) { dot.classList.toggle("active", d === index); });
    }

    function start() {
      stop();
      timer = setInterval(function () { goTo(index + 1); }, CAROUSEL_INTERVAL_MS);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    root.querySelector(".carousel-prev").addEventListener("click", function () { goTo(index - 1); start(); });
    root.querySelector(".carousel-next").addEventListener("click", function () { goTo(index + 1); start(); });
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () { goTo(parseInt(dot.getAttribute("data-slide"), 10)); start(); });
    });
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);

    start();
  }

  function renderMediaCards(containerId, items) {
    var container = document.getElementById(containerId);
    if (!container || !items || !items.length) return;
    container.innerHTML = items.map(cardHtml).join("");
    container.querySelectorAll("[data-carousel]").forEach(initCarousel);
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
