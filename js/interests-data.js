// Interests cards — same idea as projects-data.js.
// images: list of image paths in img/interests/.
//   One image = static thumbnail. Two or more = auto-revolving carousel.
//   (A static site can't read folder contents, so list each image path here.)
// linkUrl (optional): adds a "Learn more" button that opens in a new tab.

const INTERESTS = [
  {
    id: "magic",
    title: "Magic",
    tags: ["Sleight of hand"],
    blurb: "The David Blaine kind — close-up card magic and street magic.",
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
    images: ["img/interests/education-1.jpg"]
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
