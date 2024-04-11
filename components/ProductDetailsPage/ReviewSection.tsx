"use client";
//libraries
import { useState } from "react";
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/ReviewSection.module.css";
//components
import UserReview from "./UserReview";
import ReviewImages from "./ReviewImages";

interface Image {
  url: string;
  alt: string;
}
const images: Image[] = [
  { url: "/pr1.webp", alt: "Image 1" },
  { url: "/pr2.webp", alt: "Image 2" },
  { url: "/pr3.webp", alt: "Image 3" },
  { url: "/pr4.webp", alt: "Image 4" },
  { url: "/pr5.webp", alt: "Image 5" },
  { url: "/pr6.webp", alt: "Image 6" },
  { url: "/pr7.webp", alt: "Image 7" },
];
export default function ReviewSection() {
  const [reviewNo, setReviewNo] = useState<number>(2);
  const userReviews = [
    {
      userName: "Ranvijay Singh Balveer",
      location: "Mumbai",
      reviewDate: "01-12-2023",
      starRating: 4,
      userMessage: "Best decoration company.",
    },
    {
      userName: "Priya Patel",
      location: "Delhi",
      reviewDate: "05-02-2023",
      starRating: 5,
      userMessage: "Excellent service! Highly recommended.",
    },
    {
      userName: "Amit Kumar",
      location: "Bangalore",
      reviewDate: "10-03-2023",
      starRating: 3,
      userMessage: "Good experience overall.",
    },
    {
      userName: "Sara Khan",
      location: "Kolkata",
      reviewDate: "15-04-2023",
      starRating: 4,
      userMessage: "Nice decorations, but a bit expensive.",
    },
    {
      userName: "Rahul Sharma",
      location: "Chennai",
      reviewDate: "20-05-2023",
      starRating: 2,
      userMessage: "Disappointing experience.",
    },
    {
      userName: "Anita Gupta",
      location: "Hyderabad",
      reviewDate: "25-06-2023",
      starRating: 5,
      userMessage: "Absolutely fantastic! Will definitely use again.",
    },
    {
      userName: "Aryan Singh",
      location: "Pune",
      reviewDate: "30-07-2023",
      starRating: 4,
      userMessage: "Great service and attention to detail.",
    },
    {
      userName: "Meera Sharma",
      location: "Ahmedabad",
      reviewDate: "05-08-2023",
      starRating: 3,
      userMessage: "Decent experience, but could improve.",
    },
    {
      userName: "Raj Patel",
      location: "Jaipur",
      reviewDate: "10-09-2023",
      starRating: 4,
      userMessage: "Happy with the service provided.",
    },
    {
      userName: "Neha Singh",
      location: "Lucknow",
      reviewDate: "15-10-2023",
      starRating: 5,
      userMessage: "Absolutely loved the decorations!",
    },
    {
      userName: "Aarav Joshi",
      location: "Surat",
      reviewDate: "20-11-2023",
      starRating: 3,
      userMessage: "Good service, but a bit slow in responding.",
    },
    {
      userName: "Nisha Gupta",
      location: "Kanpur",
      reviewDate: "25-12-2023",
      starRating: 4,
      userMessage: "Satisfied with the outcome.",
    },
    {
      userName: "Arjun Patel",
      location: "Nagpur",
      reviewDate: "01-01-2024",
      starRating: 2,
      userMessage: "Not what I expected.",
    },
    {
      userName: "Aditi Sharma",
      location: "Indore",
      reviewDate: "05-02-2024",
      starRating: 5,
      userMessage: "Outstanding service!",
    },
    {
      userName: "Kabir Singh",
      location: "Bhopal",
      reviewDate: "10-03-2024",
      starRating: 4,
      userMessage: "Impressive work.",
    },
    {
      userName: "Anika Gupta",
      location: "Visakhapatnam",
      reviewDate: "15-04-2024",
      starRating: 3,
      userMessage: "Average experience.",
    },
    {
      userName: "Aryan Sharma",
      location: "Patna",
      reviewDate: "20-05-2024",
      starRating: 4,
      userMessage: "Good job overall.",
    },
    {
      userName: "Riya Patel",
      location: "Ludhiana",
      reviewDate: "25-06-2024",
      starRating: 5,
      userMessage: "Absolutely amazing!",
    },
    {
      userName: "Rohan Singh",
      location: "Agra",
      reviewDate: "30-07-2024",
      starRating: 4,
      userMessage: "Satisfied with the service.",
    },
    {
      userName: "Dia Sharma",
      location: "Varanasi",
      reviewDate: "05-08-2024",
      starRating: 3,
      userMessage: "Could be better.",
    },
  ];
  const readMoreHandler = () => {
    setReviewNo((prev) => prev + 2);
  };

  const readLessHandler = () => {
    setReviewNo(2);
  };
  return (
    <>
      <div className={style.container}>
        <h2 className={style.heading}>Rating</h2>
        <div className={style.nestedContainer}>
          <div className={style.box}>
            <p className={style.rating}>
              4.9{" "}
              <Image
                src="/icons/green-star.svg"
                alt="green star image"
                height={20}
                width={20}
              />
            </p>
            <span className={style.ratingText}>369 Ratings</span>
          </div>
          <div className={style.box}>
            <button className={style.reviewBtn}>
              Write a review{" "}
              <Image
                src="/icons/write.svg"
                alt="write icon"
                height={30}
                width={30}
              />
            </button>
          </div>
        </div>
        <ReviewImages images={images} applyFunction={false} />
        <div className={style.texReviews}>
          {userReviews.slice(0, reviewNo).map((elem) => (
            <UserReview
              userMessage={elem.userMessage}
              userLocation={elem.location}
              userName={elem.userName}
              reviewDate={elem.reviewDate}
              reviewStar={elem.starRating}
              key={Math.random()}
            />
          ))}
        </div>
        {userReviews.length === reviewNo ? (
          <button className={style.readButton} onClick={readLessHandler}>
            Read Less
          </button>
        ) : (
          <button className={style.readButton} onClick={readMoreHandler}>
            Read More
          </button>
        )}
      </div>
    </>
  );
}
