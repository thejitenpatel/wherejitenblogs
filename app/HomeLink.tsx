"use client";

import { sans } from "./fonts";
import { usePathname } from "next/navigation";
import Link from "./Link";
import { CSSProperties } from "react";

// Extend the CSSProperties type
interface CustomCSSProperties extends CSSProperties {
  "--myColor1"?: string;
  "--myColor2"?: string;
}

export default function HomeLink() {
  const pathname = usePathname();
  const isActive = pathname === "/";

  const style: CustomCSSProperties = {
    "--myColor1": isActive ? "var(--text)" : "var(--pink)",
    "--myColor2": isActive ? "var(--text)" : "var(--purple)",
    backgroundImage: "linear-gradient(45deg, var(--myColor1), var(--myColor2))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    transition: "--myColor1 0.2s ease-out, --myColor2 0.2s ease-in-out",
  };

  return (
    <Link
      href="/"
      className={[
        sans.className,
        "inline-block text-2xl font-black",
        isActive ? "" : "hover:scale-[1.02]",
      ].join(" ")}
    >
      <span style={style}>wherejitenblogs</span>
    </Link>
  );
}
