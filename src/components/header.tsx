import React from "react";
import Logo from "./logo";
import Menu from "./menu";

export default function Header() {
  return (
    <header
      className="mx-6 flex items-center justify-between
     "
    >
      <Logo />
      <Menu />
    </header>
  );
}
