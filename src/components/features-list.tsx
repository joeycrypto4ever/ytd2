import { feature } from "@/lib/types";
import Feature from "./feature";

export default function FeaturesList() {
  const features: feature[] = [
    {
      imageUrl: "/apple.svg",
      title: "100% FREE",
      description:
        "Get access to video thumbnails, tags, title, and description instantly!",
    },
    {
      imageUrl: "/randomLogo2.svg",
      title: "Easy to use",
      description:
        "Get access to video thumbnails, tags, title, and description instantly!",
    },
    {
      imageUrl: "/rlogo.svg",
      title: "Instant access",
      description:
        "Get access to video thumbnails, tags, title, and description instantly!",
    },
  ];
  return (
    <section className="w-3/4 py-6 mx-auto flex flex-col sm:flex-row sm:w-full items-center justify-between gap-8 sm:p-20">
      {features.map((item) => (
        <Feature
          key={item.title}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}
