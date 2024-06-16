import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type technology =
  | "NextJS"
  | "Unity"
  | "Csharp"
  | "AWS"
  | "TypeScript"
  | "React"
  | "ExpressJS"
  | "Azure"
  | "PostgreSQL"
  | "Python";

const technologyUrls: Record<technology, string> = {
  NextJS: "https://nextjs.org/",
  Unity: "https://unity.com/",
  Csharp: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  AWS: "https://aws.amazon.com/",
  TypeScript: "https://www.typescriptlang.org/",
  React: "https://react.dev/",
  ExpressJS: "https://expressjs.com/",
  Azure: "https://azure.microsoft.com/en-us",
  PostgreSQL: "https://www.postgresql.org/",
  Python: "https://www.python.org/",
};

type ProjectType = {
  title: string;
  type: string;
  slug: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  techStack: technology[];
  summary: React.ReactNode;
  year: string;
  company?: string;
  role?: string;
};

const projects: ProjectType[] = [
  {
    title: "The Next Legends: Muhammad Ali",
    year: "2024",
    type: "Web app, 3D Viewer, Videogame",
    slug: "the-next-legends-muhammad-ali",
    url: "https://www.thenextlegends.xyz/",
    imageUrl: "/projects/tnl.jpg",
    techStack: [
      "React",
      "TypeScript",
      "NextJS",
      "AWS",
      "Unity",
      "Csharp",
      "ExpressJS",
    ],
    imageAlt:
      'Image of Muhammad Ali with text "The Next Legends: Muhammad Ali"',
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
    type: "Web app, 3D Viewer",
    slug: "party-bear-swappables",
    url: "https://opensea.io/collection/partybear/",
    imageUrl: "/projects/pb-swappables.jpg",
    imageAlt: 'A Party Bear (NFT) with text saying "Clear The Runway"',
    techStack: ["React", "TypeScript", "NextJS", "AWS", "Unity", "Csharp"],
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
    title: "Roast My Site",
    year: "2023",
    type: "Micro SaaS Startup",
    slug: "roast-my-site",
    url: "https://roastmysite.io/",
    imageUrl: "/projects/roastmysite.png",
    imageAlt:
      'Image of the website saying "Your website’s roasts are now public"',
    techStack: ["React", "TypeScript", "NextJS", "PostgreSQL"],
    summary: (
      <Fragment>
        <p>
          I have been learning how businesses operate, and as part of that
          learning process I launched Roast My Site, a micro-SaaS startup that
          helped business owners receive feedback for their landing pages.
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
    techStack: ["TypeScript", "Azure"],
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
    techStack: ["Unity", "Csharp"],
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
    imageAlt: 'three big creatures in a city, with the word "I Am Monster"',
    techStack: ["Unity", "Csharp", "Python"],
    summary: <Fragment></Fragment>,
  },
  {
    title: "El Mandamás",
    year: "2024",
    type: "Videogame (PC)",
    slug: "game-el-mandamas",
    url: "https://timrodz.itch.io/el-mandamas",
    imageUrl: "/projects/el-mandamas.png",
    imageAlt: 'Map of Panama with text saying "El Mandamás" (The ruler)',
    techStack: ["Unity", "Csharp"],
    summary: <Fragment></Fragment>,
  },
];

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div id={`project-${project.slug}`}>
      <Link
        id="project-title"
        href={project.url}
        target="_blank"
        className="hover:underline hover:decoration-teal-700"
      >
        <h3>
          {project.title} - {project.type}
        </h3>
      </Link>
      <div
        id="project-container"
        className="mt-6 flex flex-col lg:flex-row gap-6"
      >
        <Link id="project-image-container" href={project.url} target="_blank">
          <Image
            id="project-image"
            src={project.imageUrl}
            alt={`${project.imageAlt}`}
            width={400}
            height={300}
          />
        </Link>
        <div id="project-details">
          <div id="project-summary">{project.summary}</div>
          <Link
            href={project.url}
            target="_blank"
            className="font-medium block mt-2 mb-3"
          >
            Click here to learn more
          </Link>
          {project.techStack && (
            <div id="project-technologies">
              {project.techStack.map((name) => (
                <Fragment>
                  <Link
                    aria-label={name}
                    href={technologyUrls[name]}
                    target="_blank"
                  >
                    {name}
                  </Link>{" "}
                </Fragment>
              ))}
            </div>
          )}
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
        "Below are exciting projects I have created and/or contributed to during my career. Due to the nature of some industries, certain projects are under NDA agreements, so I cannot show everything I've worked on."
      }
    </p>
    <div id="project-showcase">
      {projects.map((p, idx) => {
        return <Project key={idx} project={p} />;
      })}
    </div>
  </section>
);
