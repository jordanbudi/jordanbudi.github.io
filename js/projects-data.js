// Add a new project by copying an object below into the matching array.
// thumbnail: path to a single image/gif in img/projects/ (shows a placeholder until you add one)
// images: use this instead of thumbnail to show 2+ pictures as an auto-revolving
//   carousel with arrows and dots, e.g. images: ["img/projects/foo-1.jpg", "img/projects/foo-2.jpg"]
// embedUrl: page to load in the "View project" modal (leave blank to just link out instead)
// linkUrl: "open in new tab" destination, also used when embedUrl is blank
// allow: iframe permissions policy, only needed if the embed uses camera/mic (e.g. "camera; microphone")

const PROJECTS = [
  {
    id: "smash-bros-companion",
    title: "Super Smash Brothers Game Mode Companion",
    year: "2026",
    tags: ["Loveable", "React"],
    blurb: "When the normal Smash Bros verus mode gets stale, use this tool for new ways to play.",
    thumbnail: "img/projects/smash-bros.png",
    embedUrl: "https://jordanbudi.github.io/smashbros-protect-the-vip-tracker-app/",
    linkUrl: "https://jordanbudi.github.io/smashbros-protect-the-vip-tracker-app/"
  },
  {
    id: "draw-your-emoji",
    title: "Draw your emoji",
    year: "2019",
    tags: ["p5.js"],
    blurb: "A simple drawing tool I built so students could quickly collect training images for our shared ML model.",
    thumbnail: "img/projects/draw-your-emoji.gif",
    embedUrl: "https://editor.p5js.org/jordanbudi/full/WJc2InNUu",
    linkUrl: "https://editor.p5js.org/jordanbudi/full/WJc2InNUu"
  },
  {
    id: "emoji-classifier",
    title: "Emoji classifier",
    year: "2019",
    tags: ["TensorFlow.js", "Machine learning"],
    blurb: "An image recognition tool that uses your webcam to guess which of 4 emojis you've drawn on paper.",
    images: ["img/projects/emoji-classifier-1.gif", "img/projects/emoji-classifier-2.png", "img/projects/emoji-classifier-3.png"],
    embedUrl: "https://editor.p5js.org/jordanbudi/full/LcD6dtwKT",
    linkUrl: "https://editor.p5js.org/jordanbudi/full/77qOcycyw",
    allow: "camera; microphone"
  }
];

// Thumbnails below point at the GIFs already hosted on the studentwork site.
// To use local images instead, drop files into img/projects/ and update the paths.
// Student names are first name + last initial; grade = the student's grade when they built it.
const STUDENT_PROJECTS = [
  {
    id: "music-and-code",
    title: "Music and Code",
    year: "2018",
    tags: ["JavaScript", "by Kiara N.", "11th grade"],
    blurb: "An interactive animation synchronized with music that responds to mouse clicks and holds.",
    thumbnail: "https://jordanbudi.github.io/studentwork/images/BLM-losinControl.gif",
    embedUrl: "https://knickens.github.io/music-code",
    linkUrl: "https://knickens.github.io/music-code"
  },
  {
    id: "js-calculator",
    title: "JavaScript Calculator",
    year: "2016",
    tags: ["JavaScript", "by Rushea D.", "10th grade"],
    blurb: "A fully functional calculator built from scratch with JavaScript, HTML, and CSS.",
    thumbnail: "https://jordanbudi.github.io/studentwork/images/rusheaCalculator.gif",
    embedUrl: "https://big-face.github.io/javascript-html-calculator/",
    linkUrl: "https://big-face.github.io/javascript-html-calculator/"
  },
  {
    id: "baby-namify",
    title: "Baby Namify",
    year: "2015",
    tags: ["Web app", "by Alexis W. & Moses A.", "10th grade"],
    blurb: "A baby name generator focused on Black and Caribbean names, filling a representation gap in existing apps.",
    thumbnail: "https://jordanbudi.github.io/studentwork/images/babyNames.gif",
    linkUrl: "https://baby-namify-0a437ca1d6f9.herokuapp.com/"
  },
  {
    id: "sauce-game",
    title: "Sauce Game",
    year: "2015",
    tags: ["Twilio API", "by Andrea E.", "10th grade"],
    blurb: "A humorous app with real SMS functionality through the Twilio API and a polished design.",
    thumbnail: "https://jordanbudi.github.io/studentwork/images/saucegame.gif",
    linkUrl: "https://saucegame.herokuapp.com/"
  },
  {
    id: "vr-dream",
    title: "VR Dream",
    year: "2018",
    tags: ["A-Frame", "WebVR", "by Dagmawit Z.", "10th grade"],
    blurb: "An abstract virtual reality experience with colorful shapes and a dreamlike immersive environment.",
    thumbnail: "https://jordanbudi.github.io/studentwork/images/vrDream.gif",
    embedUrl: "https://dzeleke.github.io/vrdream",
    linkUrl: "https://dzeleke.github.io/vrdream"
  }
  /*,
  {
    id: "more-student-work",
    title: "More student projects",
    tags: ["Full gallery"],
    blurb: "Explore the full gallery of student work at Mr. Budi's Student Projects site.",
    thumbnail: "img/projects/studentwork.jpg",
    linkUrl: "https://jordanbudi.github.io/studentwork"
  }*/
];
