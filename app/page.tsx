import Image from "next/image";
import Link from "next/link";
import { projects, about, socials } from "./data";

export default function Home() {
  return (
    <main>
      <section id="hero" className="hero-wrapper">
        <div
          id="hero-container"
          className="max-w-[100%] md:max-w-screen-xl mx-auto px-4 md:px-0"
        >
          <div
            id="hero-contents"
            className="flex flex-col gap-6 md:gap-8 text-teal-800"
          >
            <h1 className="text-3xl md:text-8xl font-semibold">{about.name}</h1>
            <h2 className="text-2xl md:text-7xl text-teal-700">
              {about.title}
            </h2>
            <div id="hero-socials" className="flex gap-4">
              {socials.map(({ name, url, icon }) => (
                <Link key={`socials-${name}`} href={url} target="_blank">
                  <Image width={30} height={30} src={icon} alt={name} />
                </Link>
              ))}
            </div>
            <Link href="#content">
              <button className="hero-button">See my work</button>
            </Link>
          </div>
        </div>
      </section>
      <div id="content" className="max-w-screen-xl mx-auto p-6 md:p-0">
        <section id="projects" className="pt-10">
          <h2 className="text-2xl font-semibold mb-3">Portfolio</h2>
          <p className="subtext">{about.portfolio}</p>
          <div
            id="project-grid"
            className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {projects.map(({ title, slug, url, imageUrl, description }) => {
              return (
                <div id={`project-${slug}`} key={slug}>
                  <Link
                    className="p-4 pt-0 bg-white rounded-md shadow-md md:shadow-lg hover:text-teal-600 hover:cursor-pointer flex flex-col gap-4 justify-between border-[1px] border-zinc-100 hover:border-zinc-200"
                    href={url}
                    target="_blank"
                  >
                    <div className="-mx-4 overflow-hidden rounded-t-md">
                      <Image
                        src={imageUrl}
                        alt={title}
                        width={800}
                        height={600}
                      />
                    </div>
                    <p className="font-bold">{title}</p>
                    <p className="subtext">{description}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
