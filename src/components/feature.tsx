import Image from "next/image";

type FeatureProps = {
  imageUrl: string;
  title: string;
  description: string;
};
export default function Feature({
  imageUrl,
  title,
  description,
}: FeatureProps) {
  return (
    <section className=" mx-auto flex flex-col  items-center  text-center gap-6 ">
      <Image
        src={imageUrl}
        width={60}
        height={60}
        alt="Picture of the author"
      ></Image>
      <h2 className="text-xl font-semibold w-1/2">{title}</h2>
      <p className="text-lg w-full">{description}</p>
    </section>
  );
}
