import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  elastic,
  com2,md,yt,linkedin,flatflox,
  threejs,
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
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FrontEnd Developer",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "elastic",
    icon: elastic,
  },
];

const experiences = [
  {
    title: "Full Stack Intern",
    company_name: "MD capitals",
    icon: md,
    iconBg: "#383E56",
    date: "April 2021 - July 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Sarv.com",
    icon: com2,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Implementing responsive design principles and ensuring seamless user experiences across various devices, while also prioritizing cross-browser compatibility.",
      "Contributing to codebase integrity through active participation in code reviews, where I provide insightful feedback to fellow developers and uphold coding standards.",
      "Utilizing backend technologies such as MongoDB for database management and authentication, and employing RESTful APIs for efficient data retrieval and manipulation.",
      "Implementing server-side rendering techniques to optimize application performance and enhance SEO capabilities.",
      "Working on backend functionalities, including user authentication, authorization, and database management, to ensure secure and scalable web applications.",
      "Integrating  APIs and services to enhance application functionality and streamline processes through advanced security system.",
      "Continuous learning and exploration of emerging technologies to stay updated with industry trends and improve development practices.",
      "Contributing to the documentation and knowledge sharing within the team to facilitate seamless collaboration and onboarding of new members.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Youtube Clone",
    description:
      "Experience building a YouTube clone, featuring seamless video playback, intuitive user interfaces, and interactive features mirroring the original platform's functionality. Utilized technologies include React.js for frontend development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: yt,
    source_code_link: "https://prem255.github.io/YoutubeClone/",
  },
  {
    name: "LinkedIn Extension",
    description:
      " Empowering LinkedIn users with a seamless data extraction solution, our extension efficiently scrapes vital company profile information and securely uploads it to your database. Simplify your lead generation and research processes.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next Js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "yellow-text-gradient",
      },
      {
        name: "NodeJs",
        color: "red-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/prem255/extensionFrontend/",
  },
  {
    name: "Flat Fox",
    description:
      "FlatFlox: Your go-to platform for hassle-free PG hunting! Discover nearby PG accommodations effortlessly with our user-friendly website. Say goodbye to tedious searches and hello to convenience and comfort in your new home away from home.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: flatflox,
    source_code_link: "https://github.com/prem255/flatflox",
  },
];

export { services, technologies, experiences, testimonials, projects };
