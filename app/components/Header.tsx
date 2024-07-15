"use client";

import { useScreenSize } from "@hooks/useScreenSize";
import Link from "next/link";

export const Header = () => {
  const { width } = useScreenSize();
  return (
    <nav>
      <div className="mx-4 md:mx-10 h-full flex items-center justify-start lg:justify-center">
        {/* <p>🦥</p> */}
        <Link href="/" className="text-xl font-medium text-center">
          Juan Rodríguez Morais
        </Link>
        {/* <p>✨</p> */}
      </div>
    </nav>
  );
};
