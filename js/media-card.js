// Shared card-media rendering used by both projects.js (Projects / Student
// Projects) and cards.js (Interests / Awards). Handles the thumbnail image
// (or auto-revolving carousel when there are 2+ images) and the tag pills,
// so both renderers stay in sync and carousel logic only lives in one place.
//
// An item can supply either:
//   images: ["path1.jpg", "path2.jpg"]   (any length; 2+ gets a carousel)
//   thumbnail: "path.jpg"                (shorthand for images: ["path.jpg"])

(function () {
  var CAROUSEL_INTERVAL_MS = 4000;

  function getImages(item) {
    if (item.images && item.images.length) return item.images;
    if (item.thumbnail) return [item.thumbnail];
    return [];
  }

  function slideHtml(src, title) {
    return (
      '<div class="carousel-slide">' +
        '<img src="' + src + '" alt="' + title + '" loading="lazy" ' +
          'onerror="this.parentNode.classList.add(\'slide-missing\'); this.remove();">' +
      '</div>'
    );
  }

  function mediaHtml(item) {
    var images = getImages(item);
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

    return (
      '<div class="project-thumb card-carousel"' + (multi ? ' data-carousel' : '') + '>' +
        '<div class="carousel-track">' + slides + '</div>' + controls +
      '</div>'
    );
  }

  function tagsHtml(item) {
    var tags = (item.tags || [])
      .map(function (tag) { return '<span class="project-tag">' + tag + '</span>'; })
      .join("");
    var yearTag = item.year ? '<span class="project-tag project-tag-year">' + item.year + '</span>' : "";
    return '<div class="project-tags">' + tags + yearTag + '</div>';
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

  function initCarousels(container) {
    container.querySelectorAll("[data-carousel]").forEach(initCarousel);
  }

  window.MediaCard = { mediaHtml: mediaHtml, tagsHtml: tagsHtml, initCarousels: initCarousels };
})();
