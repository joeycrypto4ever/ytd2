import Image from "next/image";
import React from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};
export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <section className="flex flex-col gap-4 py-6">
      <hr />
      <div className="flex justify-between items-center px-6 ">
        <h1>{question}</h1>
        <Image
          src="/add.svg"
          width={32}
          height={32}
          alt="Picture of the author"
        ></Image>
      </div>
      <p>{answer}</p>
    </section>
  );
}
