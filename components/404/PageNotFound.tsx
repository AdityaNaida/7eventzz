import Link from "next/link";
import Image from "next/image";

import style from "@/components/404/PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={style.container}>
      <Image src="/icons/404.svg" alt="404 image" height={50} width={50} />
      <Link href="/category">Explore</Link>
    </div>
  );
}
