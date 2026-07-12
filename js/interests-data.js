// Interests cards — same idea as projects-data.js.
// images: list of image paths in img/interests/.
//   One image = static thumbnail. Two or more = auto-revolving carousel.
//   (A static site can't read folder contents, so list each image path here.)
// linkUrl (optional): adds a "Learn more" button that opens in a new tab.

const INTERESTS = [
  {
    id: "magic",
    title: "Magic",
    tags: ["Sleight of hand", "Broker of Wonder (ask me about it)"],
    blurb: "Coolest person I've performed magic for is M.C. Hammer; coolest place I've performed magic is the White House",
    images: [
      "img/interests/magic-1.jpg",
      "img/interests/magic-2.jpg",
      "img/interests/magic-3.jpg"
    ]
  },
  {
    id: "education",
    title: "Education & learning",
    tags: ["Teaching"],
    blurb: "8 years in the classroom and still obsessed with how people learn new things.",
    images: [
      "img/interests/education-1.jpg",
      "img/interests/education-2.jpg",
      "img/interests/education-3.jpg"
    ]
  },
  {
    id: "gaming",
    title: "Gaming",
    tags: ["Design", "Dev", "Business"],
    blurb: "Design, development, business, and everything in between.",
    images: ["img/interests/gaming-1.jpg"]
  },
  {
    id: "film-tv",
    title: "Film & television",
    tags: ["Storytelling"],
    blurb: "A good story well told — from prestige TV to popcorn blockbusters.",
    images: ["img/interests/film-tv-1.jpg"]
  }
];
