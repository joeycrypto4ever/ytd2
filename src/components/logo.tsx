import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={112}
        height={20}
        alt="Picture of the author"
      ></Image>
    </Link>
  );
}
