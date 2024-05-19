import cn from "@/lib/utils";
import React from "react";

type SkeletonProps = {
  className?: string;
};
export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "w-[300px] h-[300px] bg-slate-300 rounded-xl animate-pulse ",
        className
      )}
    />
  );
}
