//libraries
import { ReactNode, useRef } from "react";
import Image from "next/image";

//style
import style from "@/components/ProductDetailsPage/SimilarContainer.module.css";

export default function SimilarContainer({
  children,
  heading,
  headingIcon,
}: {
  children: ReactNode;
  heading: string;
  headingIcon: string;
}) {
  const slider = useRef<HTMLDivElement>(null);
  function handleRightClick() {
    if (slider.current) {
      slider.current.scrollLeft += slider.current.offsetWidth;
    }
  }

  function handleLeftClick() {
    if (slider.current) {
      slider.current.scrollLeft -= slider.current.offsetWidth;
    }
  }

  return (
    <>
      <div className={style.container}>
        <h2 className={style.heading}>
          {heading}
          {headingIcon && (
            <Image
              src={headingIcon}
              alt={`${headingIcon} icon`}
              height={20}
              width={20}
            />
          )}
        </h2>
        <button
          onClick={handleLeftClick}
          className={`${style.controllerBtn} ${style.left}`}
        >
          <Image
            src="/icons/chevron-left.svg"
            alt="chevron left image"
            height={25}
            width={25}
          />
        </button>
        <button
          onClick={handleRightClick}
          className={`${style.controllerBtn} ${style.right}`}
        >
          <Image
            src="/icons/chevron-right.svg"
            alt="chevron right image"
            height={25}
            width={25}
          />
        </button>

        <div className={style.slider} ref={slider}>
          {children}
        </div>
      </div>
    </>
  );
}
