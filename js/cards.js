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
  // Cards with multiple images get prev/next arrows, dot pips, and a counter,
  // navigable by click or arrow keys.
  function openLightbox(images, startIndex, alt) {
    var index = startIndex;
    var count = images.length;
    var multi = count > 1;

    var overlay = document.createElement("div");
    overlay.className = "image-lightbox";

    var nav = "";
    if (multi) {
      var dots = images.map(function (_, i) {
        return '<button type="button" class="image-lightbox-dot' + (i === index ? " active" : "") + '" data-slide="' + i + '" aria-label="Image ' + (i + 1) + '"></button>';
      }).join("");
      nav =
        '<button type="button" class="image-lightbox-arrow image-lightbox-prev" aria-label="Previous image">&#10094;</button>' +
        '<button type="button" class="image-lightbox-arrow image-lightbox-next" aria-label="Next image">&#10095;</button>' +
        '<div class="image-lightbox-footer">' +
          '<div class="image-lightbox-dots">' + dots + '</div>' +
          '<div class="image-lightbox-counter"></div>' +
        '</div>';
    }

    overlay.innerHTML =
      '<button type="button" class="image-lightbox-close" aria-label="Close">&times;</button>' +
      '<img src="' + images[index] + '" alt="' + (alt || "") + '">' + nav;

    var img = overlay.querySelector("img");
    var dotEls = overlay.querySelectorAll(".image-lightbox-dot");
    var counter = overlay.querySelector(".image-lightbox-counter");

    function goTo(i) {
      index = (i + count) % count;
      img.src = images[index];
      dotEls.forEach(function (dot, d) { dot.classList.toggle("active", d === index); });
      if (counter) counter.textContent = (index + 1) + " / " + count;
    }
    if (multi) goTo(index);

    function close() {
      overlay.remove();
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
      else if (multi && e.key === "ArrowLeft") goTo(index - 1);
      else if (multi && e.key === "ArrowRight") goTo(index + 1);
    }

    overlay.addEventListener("click", function (e) {
      if (e.target.closest(".image-lightbox-prev")) { goTo(index - 1); return; }
      if (e.target.closest(".image-lightbox-next")) { goTo(index + 1); return; }
      var dot = e.target.closest(".image-lightbox-dot");
      if (dot) { goTo(parseInt(dot.getAttribute("data-slide"), 10)); return; }
      if (e.target === overlay || e.target.closest(".image-lightbox-close")) close();
    });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(overlay);
  }

  document.addEventListener("click", function (e) {
    var img = e.target.closest(".project-thumb img");
    if (!img) return;
    var thumb = img.closest(".project-thumb");
    var slideImgs = Array.prototype.slice.call(thumb.querySelectorAll(".carousel-slide img"));
    var images = slideImgs.map(function (im) { return im.src; });
    var start = slideImgs.indexOf(img);
    if (!images.length) { images = [img.src]; start = 0; }
    openLightbox(images, start < 0 ? 0 : start, img.alt);
  });
})();
