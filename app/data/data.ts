const about = {
  name: "Juan Alejandro Morais",
  title: "Full-Stack Software Engineer",
  portfolio:
    "I have professional experience building Full Stack & Web Applications and Games — I embrace the challenge, independent of stack.",
  projects:
    "What am I working on? Here is my latest activity on Github, which involves personal, open source, and freelance projects.",
  posts:
    "I love sharing my knowledge with others. My content is centered around an audience starting with Web Technologies and Game Development.",
  about:
    "I am a Product Software Engineer and a strong advocate for success as a result of great leadership, mentorship, teamwork, and a joyful approach to solving issues — This is what you can expect from me. I specialize in making Full Stack Applications that help individuals and companies reach their goals and achieve their dreams. My front-end (JS) stack encompasses Gatsby, React, and GraphQL. For back-end (Python) I work with Flask, Pandas, Celery, AWS, and SQL.",
};

const projects = [
  {
    title: "The Next Legends: Muhammad Ali",
    slug: "the-next-legends-muhammad-ali",
    url: "https://www.thenextlegends.xyz/",
    imageUrl: "/projects/tnl.jpg",
    description: "NextJS + Web3 + AWS",
  },
  {
    title: "Party Bear: Swappables",
    slug: "party-bear-swappables",
    url: "https://opensea.io/collection/partybear/",
    imageUrl: "/projects/pb-swappables.jpg",
    description: "NextJS + Web3 + AWS",
  },
  {
    title: "Roast My Site — SaaS app",
    slug: "roast-my-site",
    url: "https://roastmysite.io/",
    imageUrl: "/projects/roastmysite.png",
    description: "NextJS + PostgreSQL",
  },
  {
    title: "Instagram Portfolio — Gatsby Starter",
    slug: "project-gatsby-starter",
    url: "https://www.gatsbyjs.org/starters/timrodz/gatsby-starter-instagram-baseweb/",
    imageUrl: "/projects/gatsby-starter.jpg",
    description: "Gatsby + React + GraphQL + Base Web",
  },
  {
    title: "Light Switch — VS Code Extension",
    slug: "project-light-switch",
    url: "https://marketplace.visualstudio.com/items?itemName=timrodz.lightswitch",
    imageUrl: "/projects/light-switch.png",
    description: "VS Code + TypeScript + Azure DevOps",
  },
  {
    title: "Clusterduck — iOS & Android Game",
    slug: "game-clusterduck",
    url: "https://pikpok.com/games/clusterduck/",
    imageUrl: "/projects/clusterduck.png",
    description: "Unity",
  },
  {
    title: "I Am Monster — iOS & Android Game",
    slug: "game-i-am-monster",
    url: "https://www.youtube.com/watch?v=ekNfJQBq4Q8",
    imageUrl: "/projects/i-am-monster.png",
    description: "Unity + Python",
  },
  {
    title: "El Mandamás —  Desktop & Web game",
    slug: "game-el-mandamas",
    url: "https://timrodz.itch.io/el-mandamas",
    imageUrl: "/projects/el-mandamas.png",
    description: "Unity",
  },
];

const seo = {
  defaultTitle: "Juan Alejandro Morais",
  logo: "../static/favicon/favicon.png",
  author: "Juan Alejandro Morais",
  url: "https://www.timrodz.dev",
  legalName: "Juan Alejandro Rodriguez Morais",
  defaultDescription:
    "Portfolio of Juan Alejandro Morais, Full-Stack Software Engineer.",
  socialLinks: {
    github: "https://github.com/timrodz",
    gitlab: "https://gitlab.com/timrodz",
    linkedin: "https://www.linkedin.com/in/timrodz",
    stackoverflow: "https://stackoverflow.com/users/4329379/juan-morais",
  },
  googleAnalyticsID: "UA-52663114-1",
  themeColor: "#0e9f96",
  backgroundColor: "#fff",
  address: {
    city: "Wellington",
    country: "New Zealand",
  },
  contact: {
    email: "timrodz@icloud.com",
  },
  foundingDate: "2019",
};

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/timrodz/",
    icon: "/icons/socials/linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/timrodz",
    icon: "/icons/socials/github.svg",
  },
  {
    name: "DEV",
    url: "https://dev.to/timrodz",
    icon: "/icons/socials/dev.svg",
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/timrodz",
    icon: "/icons/socials/gitlab.svg",
  },
  {
    name: "StackOverflow",
    url: "https://stackoverflow.com/users/4329379/juan-morais",
    icon: "/icons/socials/stackoverflow.svg",
  },
];

export { about, projects, seo, socials };
