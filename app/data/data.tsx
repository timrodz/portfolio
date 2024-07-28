import Link from "next/link";

export type TechnologyName =
  | "Elixir"
  | "Next.js"
  | "Unity"
  | "C#"
  | "AWS"
  | "TypeScript"
  | "React"
  | "ExpressJS"
  | "Azure"
  | "PostgreSQL"
  | "Python"
  | "Phoenix"
  | "Tailwind CSS"
  | "Flask";

export const TechnologyNameUrl: Record<TechnologyName, string> = {
  "Next.js": "https://nextjs.org/",
  Unity: "https://unity.com/",
  "C#": "https://learn.microsoft.com/en-us/dotnet/csharp/",
  AWS: "https://aws.amazon.com/",
  TypeScript: "https://www.typescriptlang.org/",
  React: "https://react.dev/",
  ExpressJS: "https://expressjs.com/",
  Azure: "https://azure.microsoft.com/en-us",
  PostgreSQL: "https://www.postgresql.org/",
  Python: "https://www.python.org/",
  Elixir: "https://elixir-lang.org/",
  Phoenix: "https://www.phoenixframework.org/",
  "Tailwind CSS": "https://tailwindcss.com/",
  Flask: "",
};

export const socials = [
  {
    name: "Blog",
    url: "https://blog.timrodz.dev",
  },
  {
    name: "GitHub",
    url: "https://github.com/timrodz",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/timrodz",
  },
  {
    name: "StackOverflow",
    url: "https://stackoverflow.com/users/4329379/juan-morais",
  },
];

export const seo = {
  defaultTitle: "Juan Rodríguez Morais",
  logo: "../static/favicon/favicon.webp",
  author: "Juan Rodríguez Morais",
  url: "https://www.timrodz.dev",
  legalName: "Juan Alejandro Rodriguez Morais",
  defaultDescription:
    "Portfolio of Juan Rodríguez Morais, Full-Stack Software Engineer.",

  themeColor: "#0e9f96",
  backgroundColor: "#fff",
  address: {
    city: "Wellington",
    country: "New Zealand",
  },
  contact: {
    email: "juan@timrodz.dev",
  },
  foundingDate: "2019",
};

export const googleAnalyticsID = "UA-52663114-1";

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  legalName: `${seo.legalName}`,
  url: `${seo.url}`,
  logo: `${seo.logo}`,
  foundingDate: `${seo.foundingDate}`,
  founders: [
    {
      "@type": "Person",
      name: `${seo.legalName}`,
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: `${seo.contact.email}`,
      contactType: "customer service",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: `${seo.address.city}`,
    addressCountry: `${seo.address.country}`,
  },
  sameAs: socials.map(({ url }) => url),
};

export type ProjectType = {
  title: string;
  type: string;
  slug: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  technologies: TechnologyName[];
  summary: React.ReactNode;
  releaseYear?: number;
  workingYears?: string;
  company?: string;
  role?: string;
  featured?: boolean;
};

export const projects: ProjectType[] = [
  {
    featured: true,
    title: "Party Bear: Swappables",
    releaseYear: 2023,
    type: "Web3 Project (Web App)",
    slug: "party-bears",
    url: "https://opensea.io/collection/partybear",
    imageUrl: "/projects/pb-swappables.webp",
    imageAlt: 'A Party Bear (NFT) with text saying "Clear The Runway"',
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "AWS",
      "Unity",
      "C#",
      "Tailwind CSS",
    ],
    company: "Futureverse",
    role: "Lead Developer",
    summary: (
      <>
        <p>
          Users buy and customize Party Bear NFTs by equipping accessories
          acquired from other NFTs and SFTs.
        </p>
        <p>
          I was the lead developer (team of 4 devs), responsible for the initial
          release with task management + delegation, doing frontend, backend,
          and 3D development, and supporting the infrastructure team with task
          automation. This project also featured a website with a 3D environment
          where owners can view and customize their bears.
        </p>
        <p>The project had a successful launch w/ good adoption!</p>
      </>
    ),
  },
  {
    featured: true,
    title: "Sharesies",
    workingYears: "2020-2022",
    type: "Stock Investment Platform (SaaS/Fintech)",
    slug: "sharesies",
    url: "https://www.sharesies.nz",
    imageUrl: "/projects/sharesies.webp",
    imageAlt:
      "Sharesies app showing 3 screens: investments, overall portfolio, and stock search",
    technologies: [
      "TypeScript",
      "React",
      "Python",
      "C#",
      "PostgreSQL",
      "Flask",
    ],
    company: "Sharesies",
    role: "Full Stack Engineer",
    summary: (
      <>
        <p>
          Sharesies is an investment platform available in NZ and AU with over
          600K users. As my first startup, I learned a lot, and worked on many
          key projects:
        </p>
        <ul className="list-disc ml-5">
          <li>
            Currency conversion: Exchange money between 2-3 currencies at
            favorable rates with an easy UX
          </li>
          <li>
            Auto-Invest: Automated investing by custom intervals and amounts
            (example: $100 per week / $1000 per month)
          </li>
          <li>
            Australian Exchange integration: Users could now buy stock in
            Australian-based companies. Learned a lot about the strict
            requirements with fintech services.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "The Next Legends",
    releaseYear: 2024,
    type: "Web3 Project (Web App + Videogame)",
    slug: "the-next-legends",
    url: "https://www.thenextlegends.xyz",
    imageUrl: "/projects/tnl.webp",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "AWS",
      "Unity",
      "C#",
      "ExpressJS",
      "Tailwind CSS",
    ],
    imageAlt: 'Muhammad Ali with text "The Next Legends"',
    company: "Futureverse",
    role: "Lead Developer",
    summary: (
      <>
        <p>
          Users buy boxer NFTs that can be customized (inside The Locker Room),
          trained (ML) and used to fight with other boxers in an AI-powered
          videogame.
        </p>
        <p>
          I joined after the initial release and was responsible for The Locker
          Room, a website that gave owners the ability to view and customize
          their boxers inside a 3D environment.
        </p>
      </>
    ),
  },
  {
    featured: true,
    title: "Tie Breaker",
    releaseYear: 2023,
    type: "Tournament management app for games (SaaS)",
    slug: "tie-breaker",
    url: "https://mtg-friends.fly.dev",
    imageUrl: "/projects/tie-breaker.webp",
    imageAlt: "Trading Card Games made easy",
    technologies: ["Elixir", "Phoenix", "PostgreSQL", "Tailwind CSS"],
    summary: (
      <>
        <p>
          When I visited friends back in my hometown, they introduced me to
          Magic: The Gathering, a trading card game with lots of deep lore,
          playing formats, and fun. I really liked the game, and went to lots of
          local tournaments. However, I saw one problem: hosting tournaments was
          very difficult: we were playing a format called &quot;Commander&quot;,
          which involves 4 players paired against each other.
        </p>
        <p>
          {`My solution? To build a tournament organizing tool which let hosts add
          participants, create round pairings (with complex algorithms), and
          easily determine round + tournament winners. This was also an
          opportunity for me to learn Elixir, a programming language I worked
          with at a previous role. Funnily enough, I didn't like Elixir at
          first, but now it's my favorite programming language!`}
        </p>
        <p>
          {`Tie Breaker is now being used by multiple stores across Panama; I'm
          very grateful for their support.`}
        </p>
      </>
    ),
  },
  {
    title: "Roast My Site",
    releaseYear: 2023,
    type: "App for website critique (SaaS)",
    slug: "roast-my-site",
    url: "https://roastmysite.io",
    imageUrl: "/projects/roastmysite.webp",
    imageAlt: "Roast My Site: Your website’s roasts are now public",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    summary: (
      <>
        <p>
          I was learning how businesses operate, and as part of that learning
          process I launched Roast My Site, a micro-SaaS startup that helped
          business owners receive feedback for their landing pages.
        </p>
        <p>
          As the only developer on the team, I worked on all software features
          as well as marketing for the product.
        </p>
      </>
    ),
  },

  {
    title: "Light Switch",
    releaseYear: 2020,
    type: "Visual Studio Code Extension (Dev tool)",
    slug: "light-switch",
    url: "https://marketplace.visualstudio.com/items?itemName=timrodz.lightswitch",
    imageUrl: "/projects/light-switch.webp",
    imageAlt: "A light bulb emoji on a blue background",
    technologies: ["TypeScript", "Azure"],
    summary: (
      <>
        <p>
          I wanted to learn how to create an extension for Visual Studio Code,
          the editor I write software with. It solves a problem I have when it
          comes to themes: I like using light themes during the day, and dark
          themes during the night. But changing them can become a repetitive and
          mundane task, which is why I automated that process with this tool.
        </p>
      </>
    ),
  },
  {
    title: "Clusterduck",
    releaseYear: 2020,
    type: "Videogame (iOS & Android)",
    slug: "clusterduck",
    url: "https://pikpok.com/games/clusterduck",
    imageUrl: "/projects/clusterduck.webp",
    imageAlt: "Many ducks with a hole in the middle",
    technologies: ["Unity", "C#"],
    company: "PikPok",
    role: "Game Programmer",
    summary: (
      <>
        <p>
          This game was the result of an internal Game Jam at PikPok, where I
          teamed up with other talented developers to come up with a silly and
          fun idea. I was part of the team that developed the initial prototype,
          and the company picked it up for release afterwards.
        </p>
      </>
    ),
  },
  {
    title: "I Am Monster",
    releaseYear: 2018,
    type: "Videogame (iOS & Android)",
    slug: "i-am-monster",
    url: "https://www.youtube.com/watch?v=ekNfJQBq4Q8",
    imageUrl: "/projects/i-am-monster.webp",
    imageAlt: 'Three big creatures in a city, with the word "I Am Monster"',
    technologies: ["Unity", "C#", "Python"],
    company: "PikPok",
    role: "Game Programmer",
    summary: (
      <p>
        Fresh out of university, this was the first commercial project I worked
        on. I joined the team as a Junior Game Programmer, and took ownerhsip of
        building many of the game’s UIs. It’s also the first time I had a look
        at backend development with Python, and I absolutely loved the entire
        process!
      </p>
    ),
  },
  {
    title: "El Mandamás",
    releaseYear: 2018,
    type: "Videogame (PC)",
    slug: "el-mandamas",
    url: "https://timrodz.itch.io/el-mandamas",
    imageUrl: "/projects/el-mandamas.webp",
    imageAlt: 'Map of Panama with text saying "El Mandamás" (The ruler)',
    technologies: ["Unity", "C#"],
    summary: (
      <p>
        This game was the result of a 48 hour game jam (
        <Link href="https://itch.io/games/tag-ludum-dare-38" target="_blank">
          Ludum Dare 38
        </Link>
        ), where I had to design and develop a game in the span of a weekend.
      </p>
    ),
  },
];

export const testimonials = [
  {
    name: "Charleston Silverman",
    title: "Project Manager, Technical Lead & Producer",
    imageUrl: "/testimonials/charleston-silverman.webp",
    summary: (
      <>
        <p>
          I have worked with and hired many developers during my working life
          and I can honestly say that Juan is by far one of the best developers
          I have worked with. Very easy and clear communication, quick
          turn-around and extremely knowledgeable about every aspect of the
          projects we have worked on together. I would highly recommend Juan to
          anyone looking for an experienced and extremely capable team member.
        </p>
      </>
    ),
  },
  {
    name: "Jorge Ortíz",
    title: "Data Engineer & MTG enthusiast",
    imageUrl: "/testimonials/jorge-ortiz.webp",
    summary: (
      <>
        <p>
          {`When it comes to organizing tournaments for Magic: The Gathering, I've been testing different methods of pairing for a long time, with little to no success. Juan's
          app is exactly what I've been looking for. It offers an intuitive
          and streamlined process for organizing matches and tournaments, with
          an easy and user-friendly interface. I highly recommend Juan's services.`}
        </p>
      </>
    ),
  },
  {
    name: "Humberto Echeverría",
    title: "Head Architect (Humberto Echeverría & Associados Arquitectos)",
    imageUrl: "/testimonials/humberto-echeverria.webp",
    summary: (
      <p>
        {`Juan built the portfolio website for my architecture firm in 2015. He behaved
        professionally throughout the process, making it easy to work with him. He was able to communicate clearly, being honest about problems he faced, but still made the effort to find solutions to those problems. `}
      </p>
    ),
  },
];
