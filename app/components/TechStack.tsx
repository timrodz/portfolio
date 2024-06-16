import { TechnologyName, TechnologyNameUrl } from "data";
import Link from "next/link";
import { Fragment } from "react";

export const TechStack = ({
  technologies,
}: {
  technologies: TechnologyName[];
}) => (
  <p id="technologies">
    {technologies.map((name) => (
      <span key={`technology-${name}`}>
        {/* <Link
          id="technology-name"
          aria-label={name}
          href={TechnologyNameUrl[name]}
          target="_blank"
        > */}
        {name}
        {/* </Link>{" "} */}
      </span>
    ))}
  </p>
);
