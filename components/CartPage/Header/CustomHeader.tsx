import Image from "next/image";
import Link from "next/link";

import style from "@/components/CartPage/Header/CustomHeader.module.css";

export default function CustomHeader({
  pageName,
  pageNumber,
  prevPath,
}: {
  pageName: string;
  pageNumber: number;
  prevPath: string;
}) {
  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <Link href={prevPath} className={style.checkoutLink}>
            <Image
              src="/icons/back-icon.svg"
              alt="back icon"
              height={25}
              width={25}
            />
            {pageName} <span>({pageNumber} / 3)</span>
          </Link>
          <div>
            <p className={style.text}>
              <Image
                src="/icons/assistant.webp"
                alt="assistant image"
                height={25}
                width={25}
              />
              Need Asistance?
            </p>
            <Link href="https://wa.me/8240590169" className={style.whatsappBtn}>
              <Image
                src="/icons/whatsapp.svg"
                alt="whatsapp icon"
                height={20}
                width={20}
              />
              Whatsapp
            </Link>
            <Link href="tel:8240590169" className={style.whatsappBtn}>
              <Image
                src="/icons/phone-icon.svg"
                alt="phone icon"
                height={20}
                width={20}
              />
              Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
