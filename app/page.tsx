"use client";

import { About } from "@components/About";
import { Footer } from "@components/Footer";
import { Hero } from "@components/Hero";
import { Projects } from "@components/Projects";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <header>
        <Hero />
      </header>
      <main>
        <div id="page-contents">
          <About />
          <Projects />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
