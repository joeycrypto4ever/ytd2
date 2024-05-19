import { VideoDetails } from "@/lib/types";
import DetailsItem from "./details-item";

export default function DetailsList() {
  const VideoDetails: VideoDetails[] = [
    {
      title: "Tags",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus repellendus consectetur quasi? Ullam, omnis mollitia!",
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus repellendus consectetur quasi? Ullam, omnis mollitia!",
    },
    {
      title: "Description",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus repellendus consectetur quasi? Ullam, omnis mollitia!",
    },
  ];
  return (
    <section className="flex sm:flex-row flex-col items-center justify-center py-12 ">
      {VideoDetails.map((item) => (
        <DetailsItem key={item.title} {...item} />
      ))}
    </section>
  );
}
