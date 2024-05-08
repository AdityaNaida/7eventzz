"use client";
import { useState } from "react";

import Link from "next/link";

import style from "@/components/SupportTickets/slugs/SlugPage.module.css";

import DashboardMenu from "@/components/AccountSettings/DashboardMenu";
import UserText from "./UserText";
export default function SlugPage() {
  const [chatPrompt, setChatPrompt] = useState<boolean>(false);
  function chatPromptHandler() {
    setChatPrompt(!chatPrompt);
  }
  return (
    <div className={style.container}>
      <DashboardMenu />
      <div className={style.ticketContainer}>
        <div className={style.heading}>
          <h1>
            Tickets <span className={style.closed}>Closed</span>
          </h1>
          <Link href="/support-tickets">Back to Support Ticket</Link>
        </div>
        <div className={style.chats}>
          <UserText
            message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae
            quas itaque officiis quasi expedita iure accusantium iste exercitationem
            soluta molestias velit vel, odio ut aliquid totam eum repudiandae fugiat
            repellat tenetur eius. Id rerum optio accusantium obcaecati, esse
            cupiditate voluptatum ab blanditiis accusamus perspiciatis aspernatur et
            sint nobis libero."
            username="Karan Aujla"
            date="Nov 26, 2023"
            isAdmin={false}
          />
          <UserText
            message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae
            quas itaque officiis quasi expedita iure accusantium iste exercitationem
            soluta molestias velit vel, odio ut aliquid totam eum repudiandae fugiat
            repellat tenetur eius. Id rerum optio accusantium obcaecati, esse
            cupiditate voluptatum ab blanditiis accusamus perspiciatis aspernatur et
            sint nobis libero."
            username="Karan Aujla"
            date="Nov 26, 2023"
            isAdmin={true}
          />
          <UserText
            message=" Ok Admin. Thanks!"
            username="Karan Aujla"
            date="Nov 26, 2023"
            isAdmin={false}
          />
          <UserText
            message=" My pleasure."
            username="Karan Aujla"
            date="Nov 26, 2023"
            isAdmin={true}
          />

          <button className={style.chatBtn} onClick={chatPromptHandler}>
            {chatPrompt ? "Close chat" : <> Let&apos;s chat</>}
          </button>
          {chatPrompt && (
            <form className={style.form}>
              <textarea
                name="user__message"
                id="user__message"
                placeholder="Enter your message..."
              ></textarea>
              <button>Post message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
