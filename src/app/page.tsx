import Button from "@/components/button";
import FaqList from "@/components/faq-list";
import Feature from "@/components/feature";
import FeaturesList from "@/components/features-list";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-around gap-4 mx-auto sm:max-w-[90%]  sm:flex-row-reverse sm:py-36  ">
        <Image
          className="sm:w-1/3"
          src="/logo.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        ></Image>
        <section className="flex flex-col gap-4 sm:w-1/2">
          <h1 className="font-bold text-3xl text-center">
            The Only Youtube Tool You Will Need (100% FREE)
          </h1>
          <p className="text-xl text-center">
            Get access to video thumbnails, tags, title, and description
            instantly!
          </p>
          <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-3 py-4">
            <input
              type="text"
              placeholder="insert video url here"
              className="indent-2 h-10 border-2 border-gray-700 rounded-md w-5/6 sm:w-2/3"
            />
            <Button className="w-1/2 h-10 sm:w-1/3">Get Video details</Button>
          </div>
        </section>
      </section>
      <FeaturesList />
      <FaqList />
    </main>
  );
}
