import { TechnologyName } from "data";

export const TechStack = ({
  technologies,
}: {
  technologies: TechnologyName[];
}) => (
  <p className="technologies">
    {technologies.map((name) => (
      <span key={`technology-${name}`}>{name}</span>
    ))}
  </p>
);
