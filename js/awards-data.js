// Awards & recognitions cards — same format as interests-data.js.
// images: list of image paths in img/awards/.
//   One image = static thumbnail. Two or more = auto-revolving carousel.
// linkUrl (optional): adds a "Read more" button that opens in a new tab.

const AWARDS = [
  {
    id: "shine-award",
    title: "Governor's Shine Award",
    year: "2015",
    tags: ["Teaching", "2016"],
    blurb: "Governor of Florida's Shine Award for Distinguished Teaching.",
    images: ["img/awards/shine-1.jpg"]
  },
  {
    id: "natgeo-arctic",
    title: "National Geographic Grosvenor Teacher Fellow",
    tags: ["Expedition", "2018"],
    blurb: "Selected as a Grosvenor Teacher Fellow and sent on an expedition to the Arctic.",
    images: [
      "img/awards/natgeo-1.jpg",
      "img/awards/natgeo-2.jpg",
      "img/awards/natgeo-3.jpg",
      "img/awards/natgeo-4.jpg",
      "img/awards/natgeo-5.jpg",
      "img/awards/natgeo-6.jpg"
    ]
  },
  {
    id: "ucla-fellowship",
    title: "UCLA Anderson fellowship",
    tags: ["MBA","Class of 2022"],
    blurb: "Full-tuition fellowship to attend UCLA Anderson School of Management.",
    images: ["img/awards/anderson-1.jpg"]
  },
  {
    id: "poets-quants",
    title: "Poets & Quants feature",
    year: "2020",
    tags: ["Press"],
    blurb: "Featured in Meet the MBA Class of 2022.",
    images: ["img/awards/poets-quants-1.png"],
    linkUrl: "https://poetsandquants.com/2020/12/18/meet-the-mba-class-of-2022-jordan-budisantoso-ucla-anderson/?"
  },
  {
    id: "usnews-oped",
    title: "US News & World Report op-ed",
    year: "2015",
    tags: ["Press"],
    blurb: "Published op-ed: Computer Science Is a Way Out of Poverty.",
    images: ["img/awards/usnews-oped-1.png"],
    linkUrl: "https://www.usnews.com/news/stem-solutions/articles/2015/12/10/op-ed-computer-science-is-a-way-out-of-poverty"
  },
  {
    id: "viceland-vr",
    title: "Viceland Feature - Beyond the Frame: The New Classroom ",
    year: "2017",
    tags: ["Press"],
    blurb: "Always trying to be at the forefront of the field, I spent 18 months exploring the applications of virtual reality for learning",
    images: ["img/awards/poets-quants-1.png"],
    linkUrl: "https://youtu.be/zGGVYT0cMHg?si=PQfTb5EBQU9-wD2N"
  }
];
