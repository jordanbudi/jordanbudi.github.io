// Add a new project by copying an object below into the matching array.
// thumbnail: path to an image/gif in img/projects/ (shows a placeholder until you add one)
// embedUrl: page to load in the "View project" modal (leave blank to just link out instead)
// linkUrl: "open in new tab" destination, also used when embedUrl is blank
// allow: iframe permissions policy, only needed if the embed uses camera/mic (e.g. "camera; microphone")

const PROJECTS = [
  {
    id: "emoji-classifier",
    title: "Emoji classifier",
    year: "2019",
    tags: ["TensorFlow.js", "Machine learning"],
    blurb: "An image recognition tool that uses your webcam to guess which of 4 emojis you've drawn on paper.",
    thumbnail: "img/projects/emoji-classifier.jpg",
    embedUrl: "https://editor.p5js.org/jordanbudi/full/LcD6dtwKT",
    linkUrl: "https://editor.p5js.org/jordanbudi/full/77qOcycyw",
    allow: "camera; microphone"
  },
  {
    id: "draw-your-emoji",
    title: "Draw your emoji",
    year: "2019",
    tags: ["p5.js"],
    blurb: "A simple drawing tool I built so students could quickly collect training images for our shared ML model.",
    thumbnail: "img/projects/draw-your-emoji.jpg",
    embedUrl: "https://editor.p5js.org/jordanbudi/full/WJc2InNUu",
    linkUrl: "https://editor.p5js.org/jordanbudi/full/WJc2InNUu"
  }
];

const STUDENT_PROJECTS = [
  // {
  //   id: "example-student-project",
  //   title: "Example student project",
  //   year: "2018",
  //   tags: ["Scratch"],
  //   blurb: "One sentence describing what the student built.",
  //   thumbnail: "img/projects/example-student-project.jpg",
  //   linkUrl: "https://..."
  // }
];
