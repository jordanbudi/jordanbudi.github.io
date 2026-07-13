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
    blurb: "Magic has led to so many cool experiences. Performing for the likes of M.C. Hammer; to places like the White House, the kitchens of Three Michelin Star restuarants, oprhanages in Indonesia, and the lower ship decks of the National Geogrpahic Explorer.",
    images: [
      "img/interests/magic-1.JPG", //note filetype
      "img/interests/magic-2.JPG", //note filetype
      "img/interests/magic-3.png", //note filetype 
      "img/interests/magic-4.JPG", //note filetype
      "img/interests/magic-5.png", //note filetype
      "img/interests/magic-6.png", //note filetype
      "img/interests/magic-7.png"
    ]
  },
  {
    id: "education",
    title: "Education & learning",
    tags: ["Teaching"],
    blurb: "8 years in the classroom and still obsessed with how people learn new things.",
    images: [
      "img/interests/education-1.JPG", //note filetype
      "img/interests/education-2.jpeg",
      "img/interests/education-3.png",
      "img/interests/education-4.png"
    ]
  },
  {
    id: "gaming",
    title: "Gaming",
    tags: ["Design", "Dev", "Business"],
    blurb: "Design, development, business, and everything in between.",
    images: [
      "img/interests/gaming-1.jpg",
      "img/interests/gaming-2.jpg",
      "img/interests/gaming-3.jpg",
      "img/interests/gaming-4.jpg",
      ]
  },
  {
    id: "film-tv",
    title: "Film & television",
    tags: ["Storytelling"],
    blurb: "A good story well told — from prestige TV to popcorn blockbusters.",
    images: ["img/interests/film-and-tv-1.jpg"]
  }
];
