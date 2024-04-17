//libraries
import Image from "next/image";
import Link from "next/link";
//style
import style from "@/components/CartPage/Header/CustomHeader.module.css";
export default function CustomHeader() {
  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <Link href="/" className={style.logo}>
            7eventzz
          </Link>
          <div>
            <p className={style.text}>Need Asistance?</p>
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
