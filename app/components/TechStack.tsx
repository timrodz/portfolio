import { Technology } from "@data";
import { Fragment } from "react";

export const TechStack = ({
  technologies,
  label,
}: {
  technologies: Technology[];
  label?: string;
}) => (
  <p className="technologies">
    {label}
    {technologies.map((t) => (
      <span key={`technology-${t}`}>{t}</span>
    ))}
  </p>
);
