"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import style from "@/components/CartPage/Header/CustomHeader.module.css";

import Location from "@/components/Navbar/Location";
import Modal from "@/components/Navbar/Modal";

export default function CustomHeader() {
  const [location, setLocation] = useState<boolean>(false);
  const locationHandler = () => {
    setLocation(!location);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <div className={style.locationCont} onClick={locationHandler}>
            <Image
              src="/icons/navigation.svg"
              alt="navigation"
              height={25}
              width={25}
            />
            <p className={style.location}>Select Location</p>
            <Image
              src="/icons/chevron_down.svg"
              alt="chevron_down icon"
              height={25}
              width={25}
            />
          </div>
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

      {location && (
        <Modal offModal={locationHandler}>
          <Location closeBtn={locationHandler} />
        </Modal>
      )}
    </>
  );
}
