//libraries
import Link from "next/link";
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/DiscountOffers.module.css";

export default function DiscountOffers({
  heading,
  subText,
  isApplyable,
  coupenCode,
}: {
  heading: string;
  subText: string;
  isApplyable: boolean;
  coupenCode: string;
}) {
  return (
    <>
      <div className={style.container}>
        <div className={style.nestedContainer}>
          <div>
            {heading && (
              <p className={style.heading}>
                <Image
                  src="/icons/percentage.svg"
                  alt="discount image"
                  height={20}
                  width={20}
                />
                {heading}
              </p>
            )}
            <p className={style.subText}>{subText}</p>
          </div>
          <div className={style.coupenBox}>
            <p className={style.coupenCode}>Use Code {coupenCode}</p>
            <Link href="/" className={style.termsConditions}>
              View T&amp;C
            </Link>
          </div>
        </div>
        {isApplyable && <div className={style.applyBox}>Apply</div>}
      </div>
    </>
  );
}
