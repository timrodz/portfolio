"use client";

import { About } from "@components/About";
import { Footer } from "@components/Footer";
import { Hero } from "@components/Hero";
import { Projects } from "@components/Projects";
import { motion } from "framer-motion";
import { Fragment } from "react";

export const MotionDiv = motion.div;
export const MotionSpan = motion.span;

export default function Home() {
  return (
    <Fragment>
      <header>
        <Hero />
      </header>
      <main>
        <div id="content">
          <About />
          <Projects />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
