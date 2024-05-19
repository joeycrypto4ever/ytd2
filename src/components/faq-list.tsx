import React from "react";
import FaqItem from "./faq-Item";
import Image from "next/image";
import { faq } from "@/lib/types";

export default function FaqList() {
  const faqs: faq[] = [
    {
      question: "test",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore voluptatibus suscipit incidunt laudantium omnis!",
    },
    {
      question: "test",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore voluptatibus suscipit incidunt laudantium omnis!",
    },
    {
      question: "test",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore voluptatibus suscipit incidunt laudantium omnis!",
    },
  ];
  return (
    <section className="w-3/4 py-6 mx-auto flex flex-col sm:flex-row sm:w-full items-center justify-between gap-8 sm:p-20">
      <Image
        className="hidden sm:block"
        src="/logo.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      ></Image>
      <div className="sm:w-[40%]">
        {faqs.map((item) => (
          <FaqItem key={item.question} {...item} />
        ))}
      </div>
    </section>
  );
}
