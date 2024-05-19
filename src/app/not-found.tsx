import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl ">Ops ! Page Not Found</h1>
      <Link href="/">
        <button className="bg-black text-white rounded-md w-full h-10 py-2 px-4 my-4">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}
