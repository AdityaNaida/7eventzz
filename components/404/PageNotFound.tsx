import Link from "next/link";
import Image from "next/image";

import style from "@/components/404/PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={style.container}>
      <div className={style.errorContent}>
        <h1>Oops !</h1>
        <p className={style.bigParagraph}>
          We can&apos;t seem to find the page you&apos;re looking for.
        </p>
        <span className={style.errorText}>Error code: 404</span>
        <p className={style.otherText}>Here are some helpful links instead:</p>
        <div className={style.linksHolder}>
          <Link href="/">Home</Link>
          <Link href="/">Help Center</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <Image
        src="/404.svg"
        alt="404 "
        height={100}
        width={145}
        className={style.image}
        quality={100}
      />
    </div>
  );
}
