"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import style from "@/components/AccountSettings/DashboardMenu.module.css";

export default function DashboardMenu() {
  const [menu, setMenu] = useState<boolean>(false);
  function menuHandler() {
    setMenu(!menu);
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.menuBtn} onClick={menuHandler}>
          <div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className={style.svgIcon}
            >
              <path
                d="M20.9001 10.9996C20.9001 5.52799 16.4723 1.09961 11.0001 1.09961C5.52848 1.09961 1.1001 5.52739 1.1001 10.9996C1.1001 16.4227 5.49087 20.8996 11.0001 20.8996C16.4867 20.8996 20.9001 16.4477 20.9001 10.9996ZM11.0001 2.25977C15.8193 2.25977 19.7399 6.18043 19.7399 10.9996C19.7399 12.7625 19.2156 14.457 18.2432 15.8922C14.3386 11.6921 7.66873 11.6845 3.75698 15.8922C2.78459 14.457 2.26025 12.7625 2.26025 10.9996C2.26025 6.18043 6.18092 2.25977 11.0001 2.25977ZM4.48056 16.8197C7.95227 12.9256 14.0488 12.9266 17.5195 16.8197C14.0361 20.7168 7.96541 20.718 4.48056 16.8197Z"
                fill="#8C969F"
                stroke="#8C969F"
                strokeWidth="0.2"
              ></path>
              <path
                d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z"
                fill="#8C969F"
                stroke="#8C969F"
                strokeWidth="0.2"
              ></path>
            </svg>{" "}
            <p>Account Settings</p>
          </div>
          <Image
            src="/icons/chevron-down.svg"
            alt="chevron down image"
            height={20}
            width={20}
          />
        </div>
        <div className={`${style.menuLinks} ${menu ? style.visible : ""}`}>
          <Link href="/" className={`${style.link}`}>
            {" "}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className={style.svgIcon}
            >
              <path
                d="M20.9001 10.9996C20.9001 5.52799 16.4723 1.09961 11.0001 1.09961C5.52848 1.09961 1.1001 5.52739 1.1001 10.9996C1.1001 16.4227 5.49087 20.8996 11.0001 20.8996C16.4867 20.8996 20.9001 16.4477 20.9001 10.9996ZM11.0001 2.25977C15.8193 2.25977 19.7399 6.18043 19.7399 10.9996C19.7399 12.7625 19.2156 14.457 18.2432 15.8922C14.3386 11.6921 7.66873 11.6845 3.75698 15.8922C2.78459 14.457 2.26025 12.7625 2.26025 10.9996C2.26025 6.18043 6.18092 2.25977 11.0001 2.25977ZM4.48056 16.8197C7.95227 12.9256 14.0488 12.9266 17.5195 16.8197C14.0361 20.7168 7.96541 20.718 4.48056 16.8197Z"
                fill="#8C969F"
                stroke="#8C969F"
                strokeWidth="0.2"
              ></path>
              <path
                d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z"
                fill="#8C969F"
                stroke="#8C969F"
                strokeWidth="0.2"
              ></path>
            </svg>
            Account Settings
          </Link>
          <Link href="/" className={`${style.link}`}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className={style.svgIcon}
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M19.8001 19.0172L18.5403 4.8319C18.5133 4.51697 18.2479 4.27853 17.9375 4.27853H15.3461C15.3101 1.91207 13.3755 0 11.0001 0C8.6246 0 6.69003 1.91207 6.65404 4.27853H4.06263C3.7477 4.27853 3.48676 4.51697 3.45977 4.8319L2.20006 19.0172C2.20006 19.0352 2.19556 19.0532 2.19556 19.0712C2.19556 20.6863 3.67572 22 5.49781 22H16.5023C18.3244 22 19.8046 20.6863 19.8046 19.0712C19.8046 19.0532 19.8046 19.0352 19.8001 19.0172ZM11.0001 1.21472C12.7052 1.21472 14.0954 2.58241 14.1313 4.27853H7.86877C7.90476 2.58241 9.29494 1.21472 11.0001 1.21472ZM16.5023 20.7853H5.49781C4.35507 20.7853 3.42828 20.0294 3.41028 19.0982L4.61601 5.49775H6.64954V7.34233C6.64954 7.67975 6.91948 7.94969 7.25691 7.94969C7.59433 7.94969 7.86427 7.67975 7.86427 7.34233V5.49775H14.1313V7.34233C14.1313 7.67975 14.4013 7.94969 14.7387 7.94969C15.0761 7.94969 15.3461 7.67975 15.3461 7.34233V5.49775H17.3796L18.5898 19.0982C18.5718 20.0294 17.6405 20.7853 16.5023 20.7853Z"
                  fill="#8C969F"
                  stroke="#8C969F"
                  strokeWidth="0.1"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="22" height="22" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            Orders
          </Link>
          <Link href="/" className={`${style.link}`}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className={style.svgIcon}
            >
              <path
                d="M14.8457 2.78909L14.7584 2.69156V2.82243V5.60142V5.65142H14.8084H17.2948H17.4066L17.3321 5.56808L14.8457 2.78909ZM13.2983 1.56036V1.51036H13.2483H5.14094C4.34121 1.51036 3.69078 2.16079 3.69078 2.96052V19.0395C3.69078 19.8392 4.34121 20.4896 5.14094 20.4896H16.8592C17.659 20.4896 18.3094 19.8392 18.3096 19.0395V7.16152V7.11152H18.2596H13.2983V1.56036ZM5.14094 0.05H14.3549L19.77 6.10242V19.0395C19.77 20.6445 18.4643 21.95 16.8597 21.95H5.14094C3.53616 21.95 2.23042 20.6443 2.23042 19.0395V2.96052C2.23042 1.35574 3.53616 0.05 5.14094 0.05Z"
                fill="#8C969F"
                stroke="white"
                strokeWidth="0.1"
              ></path>
              <path
                d="M5.46553 17.2828V15.8225H16.5343V17.2828H5.46553Z"
                fill="#8C969F"
                stroke="white"
                strokeWidth="0.1"
              ></path>
              <path
                d="M5.46553 13.8922V12.4318H16.5343V13.8922H5.46553Z"
                fill="#8C969F"
                stroke="white"
                strokeWidth="0.1"
              ></path>
              <path
                d="M5.46553 10.5016V9.04121H16.5343V10.5016H5.46553Z"
                fill="#8C969F"
                stroke="white"
                strokeWidth="0.1"
              ></path>
            </svg>
            Tickets
          </Link>
          <Link href="/" className={`${style.link}`}>
            {" "}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className={style.svgIcon}
            >
              <path
                d="M18.7782 3.2218C16.7005 1.14421 13.9382 0 11 0C8.0618 0 5.29947 1.14421 3.2218 3.2218C1.14421 5.29947 0 8.0618 0 11C0 13.9382 1.14421 16.7005 3.2218 18.7782C5.29947 20.8558 8.0618 22 11 22C13.9382 22 16.7005 20.8558 18.7782 18.7782C20.8558 16.7005 22 13.9382 22 11C22 8.0618 20.8558 5.29947 18.7782 3.2218ZM11 1.28906C13.4458 1.28906 15.6831 2.19832 17.3923 3.69613L14.3926 6.69591C13.4586 5.95818 12.2799 5.51727 11 5.51727C9.72018 5.51727 8.54141 5.95818 7.60749 6.69591L4.60771 3.69613C6.31692 2.19832 8.55418 1.28906 11 1.28906ZM15.1937 11C15.1937 13.3124 13.3124 15.1937 11 15.1937C8.68759 15.1937 6.80634 13.3124 6.80634 11C6.80634 8.68759 8.68759 6.80634 11 6.80634C13.3124 6.80634 15.1937 8.68759 15.1937 11ZM1.28906 11C1.28906 8.55413 2.19837 6.31688 3.69621 4.60763L6.69599 7.6074C5.95822 8.54137 5.51727 9.72013 5.51727 11C5.51727 12.2799 5.95818 13.4586 6.69591 14.3926L3.69613 17.3924C2.19832 15.6831 1.28906 13.4458 1.28906 11ZM11 20.7109C8.55413 20.7109 6.31688 19.8016 4.60758 18.3038L7.60736 15.304C8.54133 16.0418 9.72009 16.4827 11 16.4827C12.2798 16.4827 13.4586 16.0418 14.3926 15.304L17.3924 18.3037C15.6831 19.8016 13.4459 20.7109 11 20.7109ZM18.3039 17.3923L15.3041 14.3925C16.0418 13.4585 16.4827 12.2798 16.4827 11C16.4827 9.72013 16.0418 8.54137 15.3041 7.6074L18.3038 4.60763C19.8016 6.31688 20.7109 8.55413 20.7109 11C20.7109 13.4458 19.8017 15.6831 18.3039 17.3923Z"
                fill="#8C969F"
              ></path>
            </svg>
            Help Center
          </Link>
        </div>
      </div>
    </>
  );
}
