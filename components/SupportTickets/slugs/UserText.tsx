import Image from "next/image";
import style from "@/components/SupportTickets/slugs/UserText.module.css";

export default function UserText({
  username,
  date,
  message,
  isAdmin,
}: {
  username: string;
  date: string;
  message: string;
  isAdmin: boolean;
}) {
  return (
    <div className={style.container}>
      <div className={style.details}>
        {isAdmin ? (
          <div className={style.adminImage}>
            <Image
              src="/icons/service.webp"
              alt="service"
              height={25}
              width={25}
            />
          </div>
        ) : (
          <div className={style.imageHolder}>
            <Image
              src="/icons/green-user.svg"
              alt="green user"
              height={25}
              width={25}
            />
          </div>
        )}

        <div>
          <p className={style.userName}>{isAdmin ? "Admin" : username} </p>
          <span className={style.date}>{date}</span>
        </div>
      </div>
      <div className={style.message}>
        <p>{message}</p>
      </div>
    </div>
  );
}
