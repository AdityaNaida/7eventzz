import Image from "next/image";
import Link from "next/link";

import style from "@/components/Contact/ContactUs.module.css";

import AccountInput from "../AccountSettings/AccountInput";

export default function ContactUs() {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Contact our team</h1>
      <p className={style.txt}>
        Got any question about the decoration? We&apos;re here to help.
      </p>
      <div className={style.nestedContainer}>
        <form className={style.form}>
          <div className={style.nameHolder}>
            <AccountInput
              inputType="text"
              labelFor="firstName"
              labelText="First Name"
            />
            <AccountInput
              inputType="text"
              labelFor="lastName"
              labelText="Last Name"
            />
          </div>
          <AccountInput inputType="email" labelFor="email" labelText="Email" />
          <AccountInput
            inputType="number"
            labelFor="phoneNumber"
            labelText="Phone number"
          />
          <div className={style.textarea}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button>Submit message</button>
        </form>
        <div className={style.othersOption}>
          <h2 className={style.h2}>Chat with us</h2>
          <p className={style.text}>
            Speak to our friendly team via live chat.
          </p>

          <Link href="https:/wa.me/8240590169" className={style.link}>
            <Image
              src="/icons/question-answe.svg"
              alt="question answers"
              height={20}
              width={20}
            />
            Start a live chat
          </Link>

          <div className={style.otherInfo}>
            <h2 className={style.h2}>Call us</h2>
            <p className={style.text}>
              Call out team Mon-Sat 10.30am to 07.30pm
            </p>

            <Link href="tel:8240590169" className={style.link}>
              <Image
                src="/icons/phone.svg"
                alt="phone"
                height={20}
                width={20}
              />
              +91 82405 90169
            </Link>
          </div>
          <div className={style.otherInfo}>
            <h2 className={style.h2}>Email us</h2>
            <p className={style.text}>care@7eventzz.com</p>
          </div>
          <div className={style.otherInfo}>
            <h2 className={style.h2}>Visit us</h2>
            <p className={style.text}>EC 91 Saltlake Sector 1 Kolkata 700064</p>
          </div>
        </div>
      </div>
    </div>
  );
}
