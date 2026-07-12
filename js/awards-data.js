// Awards & recognitions cards — same format as interests-data.js.
// images: list of image paths in img/awards/.
//   One image = static thumbnail. Two or more = auto-revolving carousel.
// linkUrl (optional): adds a "Read more" button that opens in a new tab.

const AWARDS = [
  {
    id: "shine-award",
    title: "Governor's Shine Award",
    year: "2015",
    tags: ["Teaching"],
    blurb: "Governor of Florida's Shine Award for Distinguished Teaching.",
    images: ["img/awards/shine-award-1.jpg"]
  },
  {
    id: "natgeo-arctic",
    title: "National Geographic Grosvenor Teacher Fellow",
    tags: ["Expedition"],
    blurb: "Selected as a Grosvenor Teacher Fellow and sent on an expedition to the Arctic.",
    images: [
      "img/awards/natgeo-arctic-1.jpg",
      "img/awards/natgeo-arctic-2.jpg",
      "img/awards/natgeo-arctic-3.jpg"
    ]
  },
  {
    id: "ucla-fellowship",
    title: "UCLA Anderson fellowship",
    tags: ["MBA"],
    blurb: "Full-tuition fellowship to attend UCLA Anderson School of Management.",
    images: ["img/awards/ucla-fellowship-1.jpg"]
  },
  {
    id: "poets-quants",
    title: "Poets & Quants feature",
    year: "2020",
    tags: ["Press"],
    blurb: "Featured in Meet the MBA Class of 2022.",
    images: ["img/awards/poets-quants-1.jpg"],
    linkUrl: "https://poetsandquants.com/2020/12/18/meet-the-mba-class-of-2022-jordan-budisantoso-ucla-anderson/?"
  },
  {
    id: "usnews-oped",
    title: "US News & World Report op-ed",
    year: "2015",
    tags: ["Press"],
    blurb: "Published op-ed: Computer Science Is a Way Out of Poverty.",
    images: ["img/awards/usnews-oped-1.jpg"],
    linkUrl: "https://www.usnews.com/news/stem-solutions/articles/2015/12/10/op-ed-computer-science-is-a-way-out-of-poverty"
  }
];
