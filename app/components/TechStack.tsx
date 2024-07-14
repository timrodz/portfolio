import { TechnologyName } from "@data";
import { Fragment } from "react";

export const TechStack = ({
  technologies,
  label,
}: {
  technologies: TechnologyName[];
  label?: string;
}) => (
  <p className="technologies">
    {label}
    {technologies.map((name) => (
      <Fragment key={`technology-${name}`}>
        <span>{name}</span>{" "}
      </Fragment>
    ))}
  </p>
);
