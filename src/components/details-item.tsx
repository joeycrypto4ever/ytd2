import { Suspense } from "react";
import Button from "./button";
import Skeleton from "./skeleton";

type DetailsItemProps = {
  title: string;
  content: string;
};
export default function DetailsItem({ title, content }: DetailsItemProps) {
  return (
    <section className="flex flex-col gap-4 items-center justify-center p-6">
      <h1 className="text-xl">{title}</h1>
      <Button className="w-1/2">Click to copy</Button>
      <Suspense fallback={<Skeleton className="h-[150px]" />}>
        <p>{content}</p>
      </Suspense>
    </section>
  );
}
