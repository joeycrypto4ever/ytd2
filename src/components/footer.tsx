import React from "react";
import Logo from "./logo";
import Menu from "./menu";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col  bg-background text-black text-center px-8 gap-3 py-4 items-center mb-auto">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center justify-center gap-4">
        <Logo />
        <p className="sm:hidden">
          Welcome to a world where your favorite YouTube content is just a click
          away. Empower your digital experience by downloading videos directly
          to your mobile or desktop.
        </p>
        <Menu />
      </div>
      <hr className="bg-black/10 h-1 w-full"></hr>
      <p>2024 | All rights reserved </p>
    </footer>
  );
}
