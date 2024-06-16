import { TechnologyName, TechnologyNameUrl } from "data";
import Link from "next/link";
import { Fragment } from "react";

export const About = () => {
  return (
    <section id="about" className="mb-16 lg:mb-20">
      <h2>Welcome 👋</h2>
      <hr />
      <p>
        I’m a software engineer & digital nomad based in New Zealand, currently
        working at{" "}
        <Link href="https://www.futureverse.com/" target="_blank">
          Futureverse
        </Link>
        . If you want to get in touch with me, please send me a message at{" "}
        <Link href="mailto:timrodz@icloud.com">timrodz@icloud.com</Link>.
      </p>
      <Link
        href={
          "https://docs.google.com/document/d/1SVf7G72m6miHjatK2mqOHYSvPPMcA991agUyubH33iU/edit?usp=sharing"
        }
        target="_blank"
        className="hover:underline block mt-4 mb-8 font-medium text-lg"
      >
        <span className="font-mono">→</span> Click here to download my resume!
      </Link>
      <h3>About me</h3>
      <p>
        Born in{" "}
        <Link href="https://en.wikipedia.org/wiki/Chitr%C3%A9" target="_blank">
          Chitré, Panamá
        </Link>{" "}
        🇵🇦 in 1995, I’m somewhat of a cross between millenials and Gen Z’ers.
        That just means I understand some of today’s memes. Since I was young,
        computers have been a part of my life, so naturally I’m very happy I
        work with them on a daily basis.
      </p>
      <p>
        I strongly believe tools are just that: tools. For that reason, I don’t
        have strong opinions about this or that technology; everything has a
        purpose, even if that means the code I wrote years ago doesn’t look
        great today. That being said,{" "}
        <span className="font-semibold">
          these are the tools I enjoy working with the most (as of{" "}
          {new Date().toLocaleDateString()})
        </span>
        :
      </p>
      <div id="project-technologies" className="mb-4">
        {(
          [
            "React",
            "TypeScript",
            "NextJS",
            "Elixir",
            "PostgreSQL",
            "AWS",
          ] as TechnologyName[]
        ).map((name) => (
          <Fragment key={`technology-${name}`}>
            <Link
              id="technology-name"
              aria-label={name}
              href={TechnologyNameUrl[name]}
              target="_blank"
            >
              {name}
            </Link>{" "}
          </Fragment>
        ))}
      </div>
      <p>
        When I’m not writing code you can find me working out (gym/cycling),
        playing video games (Currently playing: Age Of Empires IV, Forza Horizon
        5), planning the next travel destination, or thinking about what to
        learn next.
      </p>
    </section>
  );
};
