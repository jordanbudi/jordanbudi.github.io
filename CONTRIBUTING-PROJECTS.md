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
   | `thumbnail` | Path to an image, e.g. `"img/projects/weather-app.jpg"`. Shows a placeholder icon until the file actually exists there. | Yes (path can point to a not-yet-added file) |
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
