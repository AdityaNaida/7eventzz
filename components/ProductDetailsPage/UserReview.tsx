//libraries
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/UserReview.module.css";

export default function UserReview({
  userName,
  reviewDate,
  userMessage,
  userLocation,
  reviewStar,
}: {
  userName: string;
  reviewDate: string;
  userMessage: string;
  userLocation: string;
  reviewStar: number;
}) {
  return (
    <>
      <div className={style.container}>
        <div className={style.heading}>
          <div className={style.nameHolder}>
            <Image
              src="/icons/user.webp"
              alt="review user"
              height={40}
              width={40}
              className={style.userImage}
            />
            <p className={style.userName}>{userName}</p>
            <span className={style.verifiedHolder}>
              <Image
                src="/icons/green-verified.svg"
                alt="verified user"
                height={15}
                width={15}
                className={style.verifiedIcon}
              />
              verified
            </span>
          </div>
          <span className={style.reviewDate}>{reviewDate}</span>
        </div>
        <div className={style.otherDetails}>
          <div className={style.cityHolder}>
            <p className={style.location}>{userLocation}</p>
            <p className={style.star}>
              {reviewStar} <span>&#9733;</span>
            </p>
          </div>

          <p className={style.messsage}>{userMessage}</p>
        </div>
      </div>
    </>
  );
}
