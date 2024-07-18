import { About } from "@components/About";
import { Footer } from "@components/Footer";
import { Hero } from "@components/Hero";
import { Projects } from "@components/Projects";
import { Testimonials } from "@components/Testimonials";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <header>
        <Hero />
      </header>
      <main id="landing">
        <div id="page-contents">
          <About />
          <Testimonials />
          <Projects />
          <Footer />
        </div>
      </main>
    </Fragment>
  );
}
