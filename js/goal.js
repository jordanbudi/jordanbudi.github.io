(function () {
  var containers = document.querySelectorAll(".support-goal");
  if (!containers.length || typeof SUPPORT_GOAL === "undefined") return;

  var goal = SUPPORT_GOAL;
  var percent = goal.goalAmount > 0
    ? Math.round((goal.currentAmount / goal.goalAmount) * 100)
    : 0;
  var barWidth = Math.min(percent, 100);
  var kofiLabel = goal.kofiUrl.replace(/^https?:\/\//, "");
  var labelText = percent + "% of $" + goal.goalAmount;
  // The label sits inside the blue fill when there's room, otherwise just after it
  var labelInside = barWidth >= 35;

  var goalHtml =
    '<div class="support-goal-card">' +
      '<div class="support-goal-header">' +
        '<span class="support-goal-title">' + goal.title + '</span>' +
        '<button type="button" class="btn btn-outline-secondary btn-sm support-goal-share" data-share="kofi">' +
          '<i class="fa fa-share" aria-hidden="true"></i> Share' +
        '</button>' +
      '</div>' +
      '<div class="support-goal-bar">' +
        '<div class="support-goal-fill" style="width: ' + barWidth + '%;">' +
          (labelInside ? '<span class="support-goal-bar-label">' + labelText + '</span>' : '') +
        '</div>' +
        (!labelInside
          ? '<span class="support-goal-bar-label support-goal-bar-label-out" style="left: ' +
            barWidth + '%;">' + labelText + '</span>'
          : '') +
      '</div>' +
      (goal.lastUpdated
        ? '<div class="support-goal-updated">Last updated: ' + goal.lastUpdated + '</div>'
        : '') +
      '<a class="support-goal-link" href="' + goal.kofiUrl + '" target="_blank" rel="noopener noreferrer">' +
        '<img class="kofi-cup" src="https://storage.ko-fi.com/cdn/cup-border.png" alt="" aria-hidden="true"> ' +
        kofiLabel +
      '</a>' +
    '</div>';

  function shareUrl(url, button) {
    if (navigator.share) {
      navigator.share({ title: goal.title, url: url }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function () {
        var original = button.innerHTML;
        button.textContent = "Link copied!";
        setTimeout(function () {
          button.innerHTML = original;
        }, 1500);
      });
    } else {
      window.open(url, "_blank", "noopener");
    }
  }

  Array.prototype.forEach.call(containers, function (container) {
    container.innerHTML = goalHtml;

    container.addEventListener("click", function (event) {
      var item = event.target.closest("[data-share]");
      if (!item) return;

      shareUrl(
        item.getAttribute("data-share") === "kofi"
          ? goal.kofiUrl
          : goal.bmcUrl,
        item
      );
    });
  });
})();