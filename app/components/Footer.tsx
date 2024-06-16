import { TechnologyNameUrl } from "data";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer>
      <div id="footer-container">
        <div>
          <p className="text-2xl text-teal-800 mb-2">
            Thank you for visiting! 👋
          </p>
          <p>
            Copyright &copy; {new Date().getFullYear()} Juan Alejandro Morais.
            This site was built with{" "}
            <a
              href={TechnologyNameUrl["NextJS"]}
              rel="noopener noreferrer"
              target="_blank"
            >
              NextJS
            </a>
            .
          </p>
        </div>
        <Socials />
      </div>
    </footer>
  );
};
