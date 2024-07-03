import { TechStack } from "@components/TechStack";
import { projects } from "@data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

function getData(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getData(params.slug);

  if (!project) {
    return {};
  }

  return {
    metadataBase: new URL("https://timrodz.dev"),
    title: `${project.title} - Project overview - Juan Alejandro Morais`,
    description: `Learn more about Juan's work with project ${
      project.title
    }, which featured technologies ${project.technologies.join(", ")}`,
    authors: [
      {
        name: "Juan Alejandro Rodriguez Morais",
        url: "https://www.timrodz.dev",
      },
    ],
  };
}

export default function Page({ params }: Props) {
  const project = getData(params.slug);

  if (!project) {
    return (
      <div className="h-[55vh] flex flex-col items-center justify-center">
        <h2 className="text-center">Project not found</h2>
        <Link href="/" className="cta-subtle inline-block mt-20">
          <span className="font-mono">←</span> Back to main site
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-4 md:mx-auto pt-20 pb-10">
      <h1>{project.title} - Project overview</h1>
      <h2>Key details</h2>
      <ul className="list-disc ml-6">
        <li>Project type: {project.type}</li>
        {project.releaseYear && (
          <li>
            Released in{" "}
            <span className="font-medium">{project.releaseYear}</span>
          </li>
        )}
        {project.workingYears && <li>Years: {project.workingYears}</li>}
        {project.company && (
          <li>
            Company/Client:{" "}
            <span className="font-medium">{project.company}</span>
          </li>
        )}
        {project.role && (
          <li>
            Role: <span className="font-medium">{project.role}</span>
          </li>
        )}
        {/* <li>Technologies: {project.technologies.join(", ")}</li> */}
        {/* <li>Link: </li> */}
      </ul>
      <Link
        href={project.url}
        target="_blank"
        className="cta-subtle inline-block mt-4"
      >
        <span className="font-mono">→</span> Click here to see the project live
        ✨
      </Link>
      <h3>Summary</h3>
      <hr />
      <div className="flex flex-col gap-4">{project.summary}</div>
      <div className="mt-4 lg:mt-6 flex flex-col gap-6 justify-center items-start lg:items-center">
        <Image
          priority
          src={project.imageUrl}
          width={800 / 1.5}
          height={600 / 1.5}
          alt={project.imageAlt}
          className="rounded-lg shadow-md"
        />
        <TechStack technologies={project.technologies} />
      </div>
      <h4 className="mt-20">Before you go 👋 Check out these projects!</h4>
      <div className="mt-4 flex flex-col md:flex-row gap-4">
        {shuffle(projects.filter((p) => p.slug !== params.slug))
          .slice(0, 3)
          .map((p) => (
            <div
              key={p.slug}
              className="rounded-t-lg bg-white rounded shadow-lg"
            >
              <Link href={`/projects/${p.slug}`}>
                <Image
                  width={400}
                  height={300}
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  className="rounded-t-md"
                />
              </Link>
              <div className="p-4">
                <h5 className="mb-1">{p.title}</h5>
                <Link href={`/projects/${p.slug}`}>
                  Click here to learn more
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-start lg:justify-center">
        <Link href="/" className="cta-subtle inline-block mt-20">
          <span className="font-mono">←</span> Back to main site
        </Link>
      </div>
    </div>
  );
}

const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
