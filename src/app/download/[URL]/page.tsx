import Button from "@/components/button";
import DetailsList from "@/components/details-list";
import Skeleton from "@/components/skeleton";
import Image from "next/image";
import { Suspense } from "react";
export default function DownloadPage() {
  return (
    <main>
      <section className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
        <Suspense fallback={<Skeleton />}>
          <Skeleton />
          {/* <Image
            src="/logo.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
          ></Image> */}
        </Suspense>
        <div className="flex gap-6 items-center justify-center px-6">
          <select name="cars" className="bg-background rounded-md py-2 px-4">
            <option value="volvo" disabled selected>
              Choose Quality
            </option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <Button>Download</Button>
        </div>
      </section>
      <DetailsList />
    </main>
  );
}
