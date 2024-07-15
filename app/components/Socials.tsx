import { socials } from "@data";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const Socials = ({ className = "" }: { className?: string }) => {
  return (
    <div id="socials" className={`socials flex gap-4 my-6 ${className}`}>
      {socials.map(({ name, url }) => (
        <Link
          key={`socials-${name}`}
          rel="noopener noreferrer"
          target="_blank"
          href={url}
        >
          <ArrowIcon />
          <p className="">{name}</p>
        </Link>
      ))}
    </div>
  );
};
