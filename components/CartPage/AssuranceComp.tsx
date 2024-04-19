import Image from "next/image";

import style from "@/components/CartPage/AssuranceComp.module.css";

export default function AssuranceComp({
  text,
  img,
}: {
  text: string;
  img: string;
}) {
  return (
    <>
      <div className={style.container}>
        <Image
          src={img}
          alt={`${img} Image`}
          height={30}
          width={30}
          unoptimized
          priority
        />
        <p>{text}</p>
      </div>
    </>
  );
}
