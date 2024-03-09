import {
  antrix,
  techshop,
  cryptowallet,
  ehub,
  codeclause,
  expense,
  healthcare,
  weather,
  dashboard,
  insta,
  leetcode,
  github,
  linkedIn,
  gfg,
  deep,
  machine,
  reactC,
  antrixC,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "https://drive.google.com/file/d/1-PdmUCNK0624sa_V44Svs_FxsCUKeKln/view?usp=sharing",
    title: "Resume",
  },
];

const languages = [
  {
    title: "HTML",
    progress: "60",
    colorCode: "#f74869",
  },
  {
    title: "CSS",
    progress: "60",
    colorCode: "#3498db",
  },
  {
    title: "JavaScript",
    progress: "85",
    colorCode: "#f7df1e",
  },
  {
    title: "TypeScript",
    progress: "65",
    colorCode: "#007acc",
  },
  {
    title: "C",
    progress: "65",
    colorCode: "#a8b9cc",
  },
  {
    title: "C++",
    progress: "80",
    colorCode: "#00599c",
  },
  {
    title: "Python",
    progress: "60",
    colorCode: "#3776ab",
  },
  {
    title: "Core Java",
    progress: "60",
    colorCode: "#e76f00",
  },
];

const frameworksAndTech = [
  {
    title: "Tailwind CSS",
    progress: "80",
    colorCode: "#38b2ac",
  },
  {
    title: "ReactJS",
    progress: "85",
    colorCode: "#61dafb",
  },
  {
    title: "Node.js",
    progress: "80",
    colorCode: "#8cc84b",
  },
  {
    title: "MongoDB",
    progress: "70",
    colorCode: "#4db33d",
  },
  {
    title: "SQL",
    progress: "70",
    colorCode: "#f29111",
  },
  {
    title: "Express",
    progress: "85",
    colorCode: "#7a05ef",
  },
  {
    title: "Flask",
    progress: "65",
    colorCode: "#2eed5e",
  },
  {
    title: "Machine Learning",
    progress: "75",
    colorCode: "#ff6f00",
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Antrix Academy Noida",
    icon: antrix,
    iconBg: "#383E56",
    date: "Sep 2021 - Oct 2021",
    points: [
      "I acquired a comprehensive understanding of Python's application in data analytics through my participation in an internship",
      "During this professional experience, I immersed myself in the core concepts of utilizing Python for the purpose of data analysis.",
      "I engaged with the Billionaire Datasets published by Forbes Magazine as a focal point of my work.",
      "My responsibilities encompassed extensive analysis and exploration of these datasets to extract valuable insights and trends related to global billionaires.",
    ],
  },
  {
    title: "Co-head ML/Python Domain",
    company_name: "EngineerHUB",
    icon: ehub,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Nov 2022",
    points: [
      "I was responsible for the creation and curation of content centered around Machine Learning (ML) and Python",
      "This initiative garnered a substantial following of over 12,000 individuals, reflecting a considerable reach within the targeted audience.",
      "Notably, this content strategy yielded a noteworthy enhancement in user engagement metrics, registering a substantial increase of 50% in user interactions and involvement with the provided material.",
      "As well as I worked on some ML projects during the content creation",
    ],
  },
  {
    title: "Web Developer",
    company_name: "CodeClause",
    icon: codeclause,
    iconBg: "#383E56",
    date: "Sep 2023 - Oct 2023",
    points: [
      "I Developed user login and signup dashboard using the React.js and firebase authentication. I also implemented sign in options using google facebook and github.",
      "I also developed a user interface for the web application which takes the current location and predict the weather of your area. In this I implemented API fetching and authentication concept to develope this project",
    ],
  },
];

const projects = [
  {
    name: "Snippets",
    description:
      "Engaged in the development of a platform enabling users to compose and access blogs spanning over 50 diverse fields, with a particular focus on current technology trends",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mern",
        color: "blue-text-gradient",
      },
    ],
    image: techshop,
    source_code_link: "https://github.com/devdivyansh522399/frontend-blog-app",
    live_link: "https://blog522.vercel.app/",
  },
  {
    name: "Bank App",
    description:
      "Created a Bank application to understand the fundamentals of Array in JavaScript. Transfer, Loan, Send dummy money operation using javaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: cryptowallet,
    source_code_link: "https://github.com/devdivyansh522399/Bank-App",
    live_link: "https://bank-app-div.netlify.app/",
  },
  {
    name: "Expense Tracker",
    description:
      "Utilized ReactJS to conceive, build, and launch an intuitive expense tracking application, enabling users to efficiently manage their individual costs.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link:
      "https://github.com/devdivyansh522399/Expense-Tracker?tab=readme-ov-file",
    live_link: "https://expense-tracker-522.netlify.app/",
  },
  {
    name: "HealthCare Application",
    description:
      "Collaborated on the development of a webbased machine learning application that utilizes five distinct machine-learning models to predict the likelihood of illness based on reported symptoms.",
    tags: [
      {
        name: "sklearn",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: healthcare,
    source_code_link: "https://github.com/devdivyansh522399/HealthCareApp",
  },
  {
    name: "Weather Application",
    description:
      "I created a weather application by harnessing the capabilities of Open Weather API and implementing it with React JS.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "weatherapp",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/devdivyansh522399/HealthCareApp",
    live_link: "https://code-clause-project-1.vercel.app/",
  },
  {
    name: "Dashboard Page",
    description:
      "Created a dashboard page fetching data and displaying it in an organized manner according to given design.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "dashboard",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/devdivyansh522399/quicksell-project",
    live_link: "https://quicksell-project-mu.vercel.app/",
  },
];

const technologies = [
  { icon: insta, link: "https://www.instagram.com/tonystark_26" },
  { icon: leetcode, link: "https://leetcode.com/TonyStarc_26/" },
  { icon: linkedIn, link: "https://www.linkedin.com/in/divyansh522/" },
  { icon: github, link: "https://github.com/devdivyansh522399" },
  { icon: gfg, link: "https://auth.geeksforgeeks.org/user/tonystrac_143" },
];

const certification = [
  {
    name: "Deep Learning",
    icon: deep,
    link: "https://drive.google.com/file/d/1Oa4WvvGjD3oMTJxYTmT3N8bcrKuBDEF_/view",
  },
  {
    name: "Machine Learning",
    icon: machine,
    link: "https://drive.google.com/file/d/1ucG0yWGcTGgQWNbW3kHsu0X0E9IfZeVw/view",
  },
  {
    name: "React Js",
    icon: reactC,
    link: "https://drive.google.com/file/d/1N2gW0ZsVHOAwPmnlA18luOnGFE9-Cu3f/view",
  },
  {
    name: "Data analytics using python",
    icon: antrixC,
    link: "https://drive.google.com/file/d/1nXpAcnCUzOOykVXXcdy1u5AQ6Mb0Iphu/view",
  },
];
export {
  languages,
  frameworksAndTech,
  experiences,
  projects,
  technologies,
  certification,
};
