import { type TechnologyName } from "data";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { TechStack } from "./TechStack";

type ProjectType = {
  title: string;
  type: string;
  slug: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  technologies: TechnologyName[];
  summary: React.ReactNode;
  year: string;
  company?: string;
  role?: string;
};

const projects: ProjectType[] = [
  {
    title: "The Next Legends",
    year: "2024",
    type: "Web app / 3D Viewer / Videogame",
    slug: "the-next-legends",
    url: "https://www.thenextlegends.xyz/",
    imageUrl: "/projects/tnl.jpg",
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
    imageAlt: 'Image of Muhammad Ali with text "The Next Legends"',
    company: "Futureverse",
    role: "Lead Developer",
    summary: (
      <Fragment>
        <p>
          The Next Legends is Web3 project where users buy boxer NFTs that can
          be customized (inside The Locker Room), trained (ML) and used to fight
          with other boxers in an AI-powered videogame.
        </p>
        <p>
          I joined after the initial release and was responsible for The Locker
          Room, a website that gave owners the ability to view and customize
          their boxers inside a 3D environment.
        </p>
      </Fragment>
    ),
  },
  {
    title: "Party Bear: Swappables",
    year: "2023",
    type: "Web app / 3D Viewer",
    slug: "party-bear-swappables",
    url: "https://opensea.io/collection/partybear/",
    imageUrl: "/projects/pb-swappables.jpg",
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
      <Fragment>
        <p>
          Party Bear: Swappables is a Web3 project where users buy and customize
          Party Bear NFTs by equipping accessories acquired from other NFTs and
          SFTs.
        </p>
        <p>
          I was the lead developer (team of 4 devs), responsible for the initial
          release with task management + delegation, doing frontend, backend,
          and 3D development, and supporting the infrastructure team with task
          automation. This project also featured a website with a 3D environment
          where owners can view and customize their bears.
        </p>
      </Fragment>
    ),
  },
  {
    title: "MTG Friends",
    year: "2023",
    type: "Tournament hosting app for Magic: The Gathering",
    slug: "mtg-friends",
    url: "https://mtg-friends.fly.dev/tournaments",
    imageUrl: "/projects/mtg-friends.jpg",
    imageAlt: "Screenshot of MTG Friends",
    technologies: ["Elixir", "Phoenix", "PostgreSQL", "Tailwind CSS"],
    summary: (
      <Fragment>
        <p>
          When I visited friends back in my hometown, they introduced me to
          Magic: The Gathering, a trading card game with lots of deep lore,
          playing formats, and fun. I really liked the game, and went to lots of
          local tournaments. However, I saw one problem: hosting tournaments was
          very difficult: we were playing a format called &quot;Commander&quot;,
          which involves 4 players paired against each other.
        </p>
        <p>
          My solution? To build a tournament organizing tool which let hosts add
          participants, create round pairings (with complex algorithms), and
          easily determine round + tournament winners. This was also an
          opportunity for me to learn Elixir, a programming language I worked
          with at a previous role. Funnily enough, I didn’t like Elixir at
          first, but now it’s my favorite programming language!
        </p>
        <p>MTG Friends is now being used by multiple stores across Panama.</p>
      </Fragment>
    ),
  },
  {
    title: "Roast My Site",
    year: "2023",
    type: "Micro SaaS Startup",
    slug: "roast-my-site",
    url: "https://roastmysite.io/",
    imageUrl: "/projects/roastmysite.png",
    imageAlt:
      'Image of the website saying "Your website’s roasts are now public"',
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    summary: (
      <Fragment>
        <p>
          I was learning how businesses operate, and as part of that learning
          process I launched Roast My Site, a micro-SaaS startup that helped
          business owners receive feedback for their landing pages.
        </p>
        <p>
          As the only developer on the team, I worked on all software features
          as well as marketing for the product.
        </p>
      </Fragment>
    ),
  },
  {
    title: "Light Switch",
    year: "2020",
    type: "Visual Studio Code Extension",
    slug: "project-light-switch",
    url: "https://marketplace.visualstudio.com/items?itemName=timrodz.lightswitch",
    imageUrl: "/projects/light-switch.png",
    imageAlt: "A light bulb emoji on a blue background",
    technologies: ["TypeScript", "Azure"],
    summary: (
      <Fragment>
        <p>
          I wanted to learn how to create an extension for Visual Studio Code,
          the editor I write software with. It solves a problem I have when it
          comes to themes: I like using light themes during the day, and dark
          themes during the night. But changing them can become a repetitive and
          mundane task, which is why I automated that process with this tool.
        </p>
      </Fragment>
    ),
  },
  {
    title: "Clusterduck",
    year: "2020",
    type: "Videogame (iOS & Android)",
    slug: "game-clusterduck",
    url: "https://pikpok.com/games/clusterduck/",
    imageUrl: "/projects/clusterduck.png",
    imageAlt: "Many ducks with a hole in the middle",
    technologies: ["Unity", "C#"],
    company: "PikPok",
    role: "Game Programmer",
    summary: (
      <Fragment>
        <p>
          This game was the result of an internal Game Jam at PikPok, where I
          teamed up with other talented developers to come up with a silly and
          fun idea. I was part of the team that developed the initial prototype,
          and the company picked it up for release afterwards.
        </p>
      </Fragment>
    ),
  },
  {
    title: "I Am Monster",
    year: "2024",
    type: "Videogame (iOS & Android)",
    slug: "game-i-am-monster",
    url: "https://www.youtube.com/watch?v=ekNfJQBq4Q8",
    imageUrl: "/projects/i-am-monster.png",
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
    year: "2024",
    type: "Videogame (PC)",
    slug: "game-el-mandamas",
    url: "https://timrodz.itch.io/el-mandamas",
    imageUrl: "/projects/el-mandamas.png",
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

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div id={`project-${project.slug}`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h3 className="m-0">
          <Link href={project.url} target="_blank" className="project-title ">
            {project.title}
          </Link>
        </h3>
        <h4 className="text-gray-600">{project.type}</h4>
      </div>
      <div className="project-container">
        <Link
          className="project-image-container"
          href={project.url}
          target="_blank"
        >
          <Image
            className="project-image"
            src={project.imageUrl}
            alt={`${project.imageAlt}`}
            width={400}
            height={300}
          />
        </Link>
        <div className="project-details">
          <div className="project-summary">{project.summary}</div>
          <Link
            href={project.url}
            target="_blank"
            className="font-medium block mt-3 mb-2"
          >
            <span className="font-mono">→</span> Click here to learn more
          </Link>
          <TechStack technologies={project.technologies} />
        </div>
      </div>
    </div>
  );
};

export const Projects = () => (
  <section id="projects">
    <h2>Portfolio</h2>
    <hr />
    <p className="lg:text-lg">
      {
        "Below are exciting projects I have created and/or contributed to during my career. Due to the nature of some industries, certain projects are under NDA agreements, so I can’t show everything I’ve worked on."
      }
    </p>
    <div className="project-showcase">
      {projects.map((p, idx) => {
        return <Project key={idx} project={p} />;
      })}
    </div>
  </section>
);
