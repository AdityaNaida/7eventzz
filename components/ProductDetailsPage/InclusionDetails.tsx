//libraries
import { ReactNode } from "react";
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/InclusionDetails.module.css";

export default function InclusionDetails({
  children,
  heading,
  icon,
}: {
  children: ReactNode;
  heading: string;
  icon: string;
}) {
  return (
    <>
      <div className={style.container}>
        {heading && (
          <h2 className={style.heading}>
            {heading}
            {icon && (
              <Image
                src={icon}
                alt={`${icon} Image`}
                height={20}
                width={20}
                className={style.icon}
              />
            )}
          </h2>
        )}
        <ul className={style.list}>{children}</ul>
      </div>
    </>
  );
}
