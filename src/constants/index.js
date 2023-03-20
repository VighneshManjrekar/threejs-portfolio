import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  bootstrap,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  inarti,
  lotus,
  gdsc,
  postman,
  arcade,
  devcamper,
  shop
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Lotus Educare Academy",
    icon: lotus,
    iconBg: "#383E56",
    date: "June 2021 - July 2021",
    points: [
      "Applied knowledge of emerging industry and technology trends to enhance project contribution efforts.",
      "Gathered technical specifications for projects to coordinate with team of 9 more developers.",
      "Absorbed techniques from experienced developers to apply towards daily technical tasks.",
    ],
  },
  {
    title: "Jr. Full Stack Intern",
    company_name: "InArtiGence.ai",
    icon: inarti,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Collaborated with management and users to develop e- commerce strategies and to integrate these strategies with Web sites.",
      "Maintained understanding of current web technologies and programming practices through continuing education and participation in professional meetings.",
      "Performed and directed Web site updates.",
      "Developed databases that supported Web applications and Web sites. Established appropriate server directory trees.",
    ],
  },
  {
    title: "Backend Lead",
    company_name: "Google Developer Students Club DMCE",
    icon: gdsc,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "Leading and Managing team of 5 members, providing guidance and support to ensure the smooth operation of our activities.",
      "Maintained open-source repository during Hacktoberfest2022.",
      "Organized and conducted workshops on Google Cloud.",
      "Achieved recognition as a Google Cloud Certified through successful completion of the Cloud Digital Leader exam.",
    ],
  },
  {
    title: "Postman Student Leader",
    company_name: "Postman",
    icon: postman,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Organized and hosted API101 sessions to literate peers about APIs using Postman.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Arcade Games Website",
    description:
      "Who doesn't like to play games? Are you also a fan of 90s arcade games this is the website you are looking for!!",
    tags: [
      {
        name: "RestAPI",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: arcade,
    source_code_link: "https://vighnesh.ninja/arcade-game-mix/",
  },
  {
    name: "Devcamper API",
    description:
      "Backend API for Devcamper, an online learning platform. Where expert trainer can offer bootcamp courses to educate people.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },

      {
        name: "mongo",
        color: "green-text-gradient",
      },
    ],
    image: devcamper,
    source_code_link: "https://github.com/VighneshManjrekar/devcamper",
  },
  {
    name: "Manjrekar Shop",
    description:
      "Marketplace to buy and sell products, including a minimal UI, Stripe integration and a secure authentication system.",
    tags: [
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongo",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/VighneshManjrekar/manjrekar-shop",
  },
];

export { services, technologies, experiences, testimonials, projects };
