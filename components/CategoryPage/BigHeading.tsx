//style
import style from "@/components/CategoryPage/BigHeading.module.css";

export default function BigHeading({ heading }: { heading: string }) {
  return (
    <>
      <h1 className={style.heading}>{heading}</h1>
    </>
  );
}
