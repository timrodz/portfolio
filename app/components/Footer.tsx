import { TechnologyNameUrl } from "@data";
import { Socials } from "./Socials";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div>
        <Socials className="mt-0 mb-4" />
        <p>
          &copy; {new Date().getFullYear()} Juan Rodríguez Morais. This site was
          built with{" "}
          <Link
            href={TechnologyNameUrl["Next.js"]}
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href={TechnologyNameUrl["Tailwind CSS"]}
            rel="noopener noreferrer"
            target="_blank"
          >
            Tailwind CSS
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};
