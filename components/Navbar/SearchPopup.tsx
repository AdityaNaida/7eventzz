"use client";
//libraries
import { useState } from "react";
import Image from "next/image";
//style
import style from "@/components/Navbar/SearchPopup.module.css";
//components
import Search from "./Search";
//props
interface Props {
  closeSearch: () => void;
}
const SearchPopup: React.FC<Props> = ({ closeSearch }) => {
  const [activeOption, setActiveOption] = useState<boolean>(true);
  const normalSearchHandler = () => {
    setActiveOption(true);
  };
  const aiSearchHandler = () => {
    setActiveOption(false);
  };

  const buttonDataArray = [
    {
      value: "Birthday",
    },
    {
      value: "Anniversary",
    },
    {
      value: "Welcome Baby",
    },
    {
      value: "Car Decor",
    },
    {
      value: "Cabana",
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.controllers}>
          <div>
            <button
              className={activeOption ? style.active : style.nothing}
              onClick={normalSearchHandler}
            >
              Normal Search
            </button>
            <button
              className={activeOption ? style.nothing : style.active}
              onClick={aiSearchHandler}
            >
              AI Search
              <Image
                src={activeOption ? "/icons/ai_black.svg" : "/icons/ai.svg"}
                alt="Ai black"
                height={20}
                width={20}
                unoptimized
              />
            </button>
          </div>
          <span className={style.closeBtn} onClick={closeSearch}>
            &#x2715;
          </span>
        </div>
        <div className={style.searchContainer}>
          {activeOption ? (
            <input
              type="text"
              required
              placeholder="Search..."
              className={style.normalSearch}
            />
          ) : (
            <Search heading="" />
          )}
        </div>
        <div className={style.trendingSearch}>
          <p>
            Trending{" "}
            <Image
              src="/icons/fire.svg"
              alt="Fire icons"
              height={20}
              width={20}
              unoptimized
            />
          </p>
          <div className={style.trendingBox}>
            {buttonDataArray.map((elem) => (
              <>
                <button value={elem.value}>
                  {elem.value}{" "}
                  <Image
                    src="/icons/trending.svg"
                    alt="trending image"
                    height={20}
                    width={20}
                    unoptimized
                  />
                </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
