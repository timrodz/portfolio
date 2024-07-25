import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer>
      <div>
        <Socials />
        <p className="mt-8 md:mt-6">
          &copy; {new Date().getFullYear()} Juan Rodríguez Morais
        </p>
      </div>
    </footer>
  );
};
