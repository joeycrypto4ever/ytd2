import { SingleLink } from "@/lib/types";
import Link from "next/link";
import React from "react";

export default function Menu() {
  const links: SingleLink[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav>
      <ul className="flex gap-4 mx-auto items-center justify-center">
        {links.map((item) => (
          <Link href={item.path} key={item.name}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
