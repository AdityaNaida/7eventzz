import Link from "next/link";
import Image from "next/image";

import style from "@/components/SupportTickets/Ticket.module.css";

export default function Ticket({
  message,
  isClosed,
  date,
  route,
}: {
  message: string;
  isClosed: boolean;
  date: string;
  route: string;
}) {
  return (
    <Link className={style.container} href={route}>
      <p>{message}</p>
      <div>
        {isClosed ? (
          <button className={style.openBtn}>Closed</button>
        ) : (
          <button className={style.redBtn}>Open</button>
        )}

        <p className={style.date}>{date}</p>
      </div>

      <Image
        src="/icons/back-icon.svg"
        alt="back icon"
        height={25}
        width={25}
        className={style.arrrow}
      />
    </Link>
  );
}
