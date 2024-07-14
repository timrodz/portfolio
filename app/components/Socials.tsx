"use client";

import { socials } from "@data";
import { motion } from "framer-motion";
import Image from "next/image";

export const Socials = () => {
  return (
    <div className="socials flex gap-4">
      {socials.map(({ name, url, icon }) => (
        <motion.a
          href={url}
          target="_blank"
          key={`socials-${name}`}
          id={`contact-${name}`}
          whileHover={{ scale: 1.2 }}
        >
          <Image width={30} height={30} src={icon} alt={name} />
        </motion.a>
      ))}
    </div>
  );
};
