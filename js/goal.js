(function () {
  var container = document.getElementById("support-goal");
  if (!container || typeof SUPPORT_GOAL === "undefined") return;

  var goal = SUPPORT_GOAL;
  var percent = goal.goalAmount > 0
    ? Math.round((goal.currentAmount / goal.goalAmount) * 100)
    : 0;
  var barWidth = Math.min(percent, 100);
  var kofiLabel = goal.kofiUrl.replace(/^https?:\/\//, "");

  container.innerHTML =
    '<div class="support-goal-card">' +
      '<div class="support-goal-header">' +
        '<span class="support-goal-title">' + goal.title + '</span>' +
        '<div class="dropdown">' +
          '<button type="button" class="btn btn-outline-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<i class="fa fa-share" aria-hidden="true"></i> Share' +
          '</button>' +
          '<div class="dropdown-menu dropdown-menu-right">' +
            '<button type="button" class="dropdown-item" data-share="kofi">Share Ko-fi page</button>' +
            '<button type="button" class="dropdown-item" data-share="bmc">Share Buy Me a Coffee page</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="support-goal-bar"><div class="support-goal-fill" style="width: ' + barWidth + '%;"></div></div>' +
      '<div class="support-goal-caption"><strong>' + percent + '%</strong> of $' + goal.goalAmount + ' goal</div>' +
      '<a class="support-goal-link" href="' + goal.kofiUrl + '" target="_blank" rel="noopener noreferrer">' +
        '<i class="fa fa-coffee" aria-hidden="true"></i> ' + kofiLabel +
      '</a>' +
    '</div>';

  function shareUrl(url, button) {
    if (navigator.share) {
      navigator.share({ title: goal.title, url: url }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function () {
        var original = button.textContent;
        button.textContent = "Link copied!";
        setTimeout(function () { button.textContent = original; }, 1500);
      });
    } else {
      window.open(url, "_blank", "noopener");
    }
  }

  container.addEventListener("click", function (event) {
    var item = event.target.closest("[data-share]");
    if (!item) return;
    shareUrl(item.getAttribute("data-share") === "kofi" ? goal.kofiUrl : goal.bmcUrl, item);
  });
})();
