"use client";

import Image from "next/image";
import Link from "next/link";
import { projects, about, socials } from "./data";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const MotionDiv = motion.div;

export default function Home() {
  const heroDrag = useMotionValue(0);
  const backgroundColor = useTransform(
    heroDrag,
    [-100, 0, 100],
    ["#85eed9", "#85eee2", "#85eaee"]
  );
  const heroTextColor = useTransform(
    heroDrag,
    [-200, 0, 200],
    ["#19805c", "#0f766e", "#0f6d76"]
  );
  const heroTextColorLight = useTransform(
    heroDrag,
    [-200, 0, 200],
    ["#0d9460", "#0d9488", "#0d8294"]
  );

  return (
    <main>
      <MotionDiv id="hero" className="hero-wrapper" style={{ backgroundColor }}>
        <div
          id="hero-container"
          className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-0"
        >
          <MotionDiv
            id="hero-contents"
            className="flex flex-col gap-6 md:gap-8"
            style={{
              color: heroTextColor,
            }}
          >
            <MotionDiv
              id="hero-name"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              whileTap={{ scale: 1.05 }}
              style={{ x: heroDrag }}
            >
              <h1 className="hero-name text-3xl md:text-8xl font-semibold hover:underline hover:cursor-pointer">
                {about.name}
              </h1>
            </MotionDiv>
            <MotionDiv style={{ color: heroTextColorLight }}>
              <h2 className="text-2xl md:text-7xl">{about.title}</h2>
            </MotionDiv>
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
          </MotionDiv>
        </div>
      </MotionDiv>
      <MotionDiv
        id="content"
        className="max-w-screen-xl mx-auto px-6 py-24 md:px-0 md:py-32"
      >
        <div id="projects" className="mt-12 flex flex-col gap-10">
          <div id="projects-title">
            <h2 className="text-5xl font-semibold mb-6">Portfolio</h2>
            <p className="subtext">{about.portfolio}</p>
          </div>
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
        </div>
      </MotionDiv>
    </main>
  );
}
