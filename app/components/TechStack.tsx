import { TechnologyName } from "@data";

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
      <span key={`technology-${name}`}>{name}</span>
    ))}
  </p>
);
