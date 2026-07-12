// Renders the grouped skills section from skills-data.js.
// Pills with an href link to the evidence (a section on this page or an external URL).

(function () {
  var container = document.getElementById("skills-groups");
  if (!container || typeof SKILL_GROUPS === "undefined") return;

  container.innerHTML = SKILL_GROUPS.map(function (group) {
    var pills = group.skills.map(function (skill) {
      if (skill.href) {
        var external = /^https?:/.test(skill.href);
        return (
          '<a class="skill-pill" href="' + skill.href + '"' +
            (external ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' +
            skill.label +
            ' <i class="fa ' + (external ? "fa-external-link" : "fa-link") + '" aria-hidden="true"></i>' +
          '</a>'
        );
      }
      return '<span class="skill-pill">' + skill.label + '</span>';
    }).join("");

    return (
      '<div class="skill-group">' +
        '<div class="subheading mb-1">' + group.title + '</div>' +
        (group.blurb ? '<p class="skill-group-blurb">' + group.blurb + '</p>' : "") +
        '<div class="skill-pills">' + pills + '</div>' +
      '</div>'
    );
  }).join("");
})();
