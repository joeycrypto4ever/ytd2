import cn from "@/lib/utils";

type ButtonProps = {
  children: string;
  className?: string;
};
export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-black text-white rounded-md w-full h-10 py-2 px-4 my-4",
        className
      )}
    >
      {children}
    </button>
  );
}
