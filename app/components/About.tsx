import Link from "next/link";

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
        <Link href="mailto:timrodz@icloud.com">timrodz@icloud.com</Link>
      </p>
      <Link
        href={
          "https://docs.google.com/document/d/1SVf7G72m6miHjatK2mqOHYSvPPMcA991agUyubH33iU/edit?usp=sharing"
        }
        target="_blank"
        className="hover:underline block mt-4 mb-8 font-medium"
      >
        Click here to download my resume!
      </Link>
      <h3>About me</h3>
      <p>
        Born in{" "}
        <Link href="https://en.wikipedia.org/wiki/Chitr%C3%A9" target="_blank">
          Chitré, Panamá
        </Link>{" "}
        in 1995, I’m somewhat of a cross between millenials and Gen Z’ers. That
        just means I understand some of today’s memes. Since I was young,
        computers have been a part of my life, so naturally I’m very happy I
        work with them on a daily basis.
      </p>
    </section>
  );
};
