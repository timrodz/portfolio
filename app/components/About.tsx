import Link from "next/link";
import { TechStack } from "./TechStack";
import Image from "next/image";

import { Reenie_Beanie } from "next/font/google";
import { Socials } from "./Socials";

const handwrittenFont = Reenie_Beanie({ weight: "400", subsets: ["latin"] });

export const About = () => {
  const today = new Date().toLocaleDateString("en-nz");

  return (
    <section id="about">
      <h2>Welcome 🦥</h2>
      <hr />
      <p>
        {`I'm a software engineer (6+ years of experience) & digital nomad based
        in New Zealand, currently working at`}{" "}
        <Link href="https://www.futureverse.com/" target="_blank">
          Futureverse
        </Link>
        . You can see my blog at{" "}
        <Link href="https://blog.timrodz.dev" target="_blank">
          blog.timrodz.dev
        </Link>
        . If you want to get in touch with me, please send me a message at{" "}
        <Link href="mailto:juan@timrodz.dev" target="_blank">
          juan@timrodz.dev
        </Link>
        .
      </p>
      <Link
        href={
          "https://docs.google.com/document/d/1SVf7G72m6miHjatK2mqOHYSvPPMcA991agUyubH33iU/edit?usp=sharing"
        }
        target="_blank"
        className="cta text-center block lg:inline-block mt-6"
      >
        Click here to download my resume!
      </Link>
      <Socials />
      <h3>About me</h3>
      <p>
        {`Born in Chitré, Panamá 🇵🇦 in 1995, I'm somewhat of a cross between
        millennials and Gen Z'ers. That means I understand some of today's
        memes. Since I was young, computers have been a part of my life, and I'm
        grateful I work with them daily—A dream scenario!`}
      </p>
      <p>
        {`Software engineering aside, you can find me outdoors, working out
        (gym/cycling), playing games (Age Of Empires IV, Forza Horizon 5, Magic:
        The Gathering), planning the next travel destination, or thinking about
        what to learn next. I'm currently learning Portuguese, music theory, and
        content creation.`}
      </p>
      <p>
        {`When it comes to tools and technologies, I believe they're there to help
        you solve problems, nothing else. I also don't have strong opinions
        about developer decisions when choosing a tech stack. Everything has a
        purpose; if it helps you solve a problem, that's what matters.`}
      </p>
      <p>
        With that said, these are my favorite tools & technologies (as of{" "}
        {today}
        ):
      </p>
      <TechStack
        technologies={[
          "React",
          "TypeScript",
          "Next.js",
          "Elixir",
          "PostgreSQL",
          "AWS",
        ]}
      />

      <p className="!mt-6">
        {`P.S. I'm definitely not a robot 🤖 To prove it, here are some pictures
        of me over the past few years!`}
      </p>
      <div id="polaroid-gallery" className="polaroid-gallery">
        <PolaroidPhoto
          source="/pictures/mexico.webp"
          alt="Picture of me in a Café in Méxi co City, México"
          description="México City 2023"
          className="rotate-[-2deg]"
        />
        <PolaroidPhoto
          source="/pictures/queenstown.webp"
          alt="Picture of me with a mountain bike in Queenstown, New Zealand"
          description="Queenstown, NZ 2021"
          className="rotate-[1deg]"
        />
        <PolaroidPhoto
          source="/pictures/yosemite.webp"
          alt="Picture of me around Yosemite, California"
          description="California 2019"
          className="rotate-[2deg]"
        />
      </div>
    </section>
  );
};

const PolaroidPhoto = ({
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
  <div className={`polaroid-container ${className ?? ""}`}>
    <div className="polaroid">
      <Image src={source} width={300} height={400} alt={alt} />
    </div>
    <p className={handwrittenFont.className}>{description}</p>
  </div>
);
