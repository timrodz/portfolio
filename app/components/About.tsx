import Link from "next/link";
import { useMemo } from "react";
import { TechStack } from "./TechStack";
import Image from "next/image";

import { Reenie_Beanie } from "next/font/google";
const handwrittenFont = Reenie_Beanie({ weight: "400", subsets: ["latin"] });

export const About = () => {
  const date = useMemo(() => new Date().toLocaleDateString("en-nz"), []);

  return (
    <section id="about">
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
          these are the tools I enjoy working with the most (as of {date})
        </span>
        :
      </p>
      <TechStack
        technologies={[
          "React",
          "TypeScript",
          "NextJS",
          "Elixir",
          "PostgreSQL",
          "AWS",
        ]}
      />
      <p>
        When I’m not writing code, you can find me working out (gym/cycling),
        playing games (Age Of Empires IV, Forza Horizon 5, Magic: The
        Gathering), planning the next travel destination, or thinking about what
        to learn next. By the way, here’s what I look like:
      </p>
      <div
        id="photos"
        className="mt-10 px-5 lg:px-0 flex flex-col lg:flex-row gap-10"
      >
        <Photo
          source="/pictures/mexico.jpg"
          alt="Picture of me in a Café in México City, México"
          description="México City 2023"
          className="rotate-[-2deg]"
        />
        <Photo
          source="/pictures/queenstown.jpg"
          alt="Picture of me with a mountain bike in Queenstown, New Zealand"
          description="Queenstown, NZ 2021"
          className="rotate-[1deg]"
        />
        <Photo
          source="/pictures/yosemite.jpg"
          alt="Picture of me around Yosemite, California"
          description="California 2019"
          className="rotate-[3deg]"
        />
      </div>
    </section>
  );
};

const Photo = ({
  source,
  alt,
  description,
  className,
}: {
  source: string;
  alt: string;
  description: string;
  className?: string;
}) => (
  <div
    className={`p-2 border-[1px] h-full rounded-sm inline-block bg-white shadow-xl pointer-events-none ${
      className ?? ""
    }`}
  >
    <div className="polaroid">
      <Image src={source} width={300} height={400} alt={alt} />
    </div>
    <p
      className={`px-1 text-center !text-3xl !my-1 ${handwrittenFont.className}`}
    >
      {description}
    </p>
  </div>
);
