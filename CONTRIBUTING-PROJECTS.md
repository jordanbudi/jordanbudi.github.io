# Adding a new project

The "My Projects" and "My Student's Projects" sections are rendered from a single data file — no HTML editing required.

## Steps

1. **Open the data file**
   Go to [`js/projects-data.js`](js/projects-data.js) — this is the only file you need to touch.

2. **Copy an existing project object**
   Inside the `PROJECTS` array, copy one of the `{ ... }` blocks (e.g. the `emoji-classifier` one) and paste it right after it, separated by a comma.

3. **Fill in the fields for your new project**

   | Field | What it is | Required? |
   |---|---|---|
   | `id` | A unique short slug, lowercase with dashes (e.g. `"weather-app"`). No spaces, must be different from every other project's `id`. | Yes |
   | `title` | The name shown on the card. | Yes |
   | `year` | Shows as a small tag, e.g. `"2024"`. | No |
   | `tags` | Array of short labels, e.g. `["React", "API"]`. Shows as pills on the card. | No |
   | `blurb` | One or two sentences describing the project. Keep it short — it's meant to be skimmed. | Yes |
   | `thumbnail` | Path to a single image, e.g. `"img/projects/weather-app.jpg"`. Shows a placeholder icon until the file actually exists there. | Yes, unless using `images` |
   | `images` | Use instead of `thumbnail` to show 2+ pictures as an auto-revolving carousel with arrows and dots — same as the Interests/Awards cards below, e.g. `["img/projects/weather-app-1.jpg", "img/projects/weather-app-2.jpg"]`. | No |
   | `embedUrl` | The URL to load inside the "View project" popup. Use this if the project can run in an iframe (p5.js editor, CodePen, a hosted demo, etc). Leave it out entirely if it can't be embedded. | No |
   | `linkUrl` | Where "Open in new tab" goes. If you skip `embedUrl`, this is also what "View project" opens directly. | Yes, unless `embedUrl` is set |
   | `allow` | Only needed if the embedded project needs camera/mic access, e.g. `"camera; microphone"`. | No |

4. **Add a thumbnail image**
   Drop a screenshot or GIF into `img/projects/` using the exact filename you referenced in `thumbnail`. If you skip this step, the card just shows a gray placeholder icon instead of a broken image — nothing breaks.

5. **Save and check locally (optional but recommended)**
   Since this site has no build step, just save the file — there's nothing to compile.

6. **Commit and push**
   ```
   git add js/projects-data.js img/projects/your-thumbnail.jpg
   git commit -m "Add [project name] to My Projects"
   git push
   ```
   Once pushed to `master`, GitHub Pages will publish it automatically — no other steps needed.

## Removing or reordering a project

Works the same way in reverse: delete the object, or cut-paste it to a different position in the array — cards render in the order the objects appear.

## Student projects

The exact same process works for the `STUDENT_PROJECTS` array further down in the same file, for the "My Student's Projects" section.

## Interests and Awards cards

Same card idea, different data files: [`js/interests-data.js`](js/interests-data.js) and [`js/awards-data.js`](js/awards-data.js). These always use the `images` array (see above) rather than `thumbnail`, but it's the same field and behaves identically.

- **One image** = static thumbnail.
- **Two or more images** = auto-revolving carousel with arrows and dots. Just add more paths to the array.
- Drop the actual image files into `img/interests/` or `img/awards/`. Missing files show a gray placeholder — nothing breaks.
- `linkUrl` is optional; when present the card gets a "Read more" button.

All four card grids (Projects, Student Projects, Interests, Awards) share the same thumbnail/carousel code in [`js/media-card.js`](js/media-card.js) — a fix or style change there applies everywhere at once. Only the click-through behavior differs: Projects/Student Projects open a "View project" modal, Interests/Awards link straight out.

Clicking any card's image (in any of the four sections) opens it full-size in a lightbox, regardless of whether it's a single image or a carousel frame.

## Support goal progress bar

The goal bar in the About section is driven by [`js/goal-data.js`](js/goal-data.js). To update it, edit the numbers by hand (there's no Ko-fi/BMC API to auto-update it):

```js
title: "Test run",      // goal name shown on the card
currentAmount: 55,      // update this as donations come in
goalAmount: 100,        // the target
```

The percentage and bar width recalculate automatically. `kofiUrl` and `bmcUrl` feed the Share button options.

## Skills section

The grouped skill pills are driven by [`js/skills-data.js`](js/skills-data.js). Each group has a `title`, a one-line `blurb`, and a `skills` list. Give a skill an `href` to turn its pill into a proof link — `"#my-projects"` scrolls to a section on the page, a full URL opens in a new tab.

## If a change doesn't show up on the live site

GitHub Pages caches files for about 10 minutes, so a just-merged change can look "broken" (old CSS with new HTML). Either wait it out, hard-refresh (Ctrl+Shift+R), or bump the `?v=` number on the css/js links in `index.html` — that forces every visitor to fetch the new files immediately.

## Switching between Ko-fi and Buy Me a Coffee

Both support buttons live in `index.html`, marked with `(active)` / `(inactive)` comments — one block near the top in the About section (the inline button) and one at the bottom (the floating widget). To switch, comment out the active block and uncomment the inactive one.
