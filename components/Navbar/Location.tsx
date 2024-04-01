"use client";
//libraries
import { useState } from "react";
import Image from "next/image";
//style
import style from "@/components/Navbar/Location.module.css";
//props
interface Props {
  closeBtn: () => void;
}
//city array
const cities: string[] = [
  "Agra",
  "Ahmedabad",
  "Amritsar",
  "Aurangabad",
  "Bangalore",
  "Bhopal",
  "Bhubaneswar",
  "Coimbatore",
  "Chandigarh",
  "Chennai",
  "Delhi",
  "Dehradun",
  "Goa",
  "Ghaziabad",
  "Guntur",
  "Gurugram",
  "Indore",
  "Jammu",
  "Jamshedpur",
  "Ludhiana",
  "Hydrabad",
  "Jaipur",
  "Kolkata",
  "Lucknow",
];
const Location: React.FC<Props> = ({ closeBtn }) => {
  const [inputLength, setInputLength] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase();
    setSearchTerm(userInput);
    const extract = cities.filter((elem) =>
      elem.toLowerCase().includes(userInput)
    );
    setSearchResults(extract);
    setInputLength(e.target.value);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <p>
            <Image
              src="/icons/gps.webp"
              alt="location icon"
              height={20}
              width={20}
              unoptimized
            />
            Select your location
          </p>
          <span onClick={closeBtn}>&#x2715;</span>
        </div>
        <div className={style.search}>
          <input
            type="text"
            placeholder="Search city..."
            required
            value={searchTerm}
            onChange={searchInputHandler}
          />
        </div>
        <div className={style.searchList}>
          {inputLength.length > 0 ? (
            <>
              {searchResults.map((elem) => (
                <button key={Math.random()}>
                  <span>
                    <Image
                      src="/icons/navigation.svg"
                      alt="Navigation image"
                      height={20}
                      width={20}
                    />
                    {elem}
                  </span>
                  <Image
                    src="/icons/trending.svg"
                    alt="trending image"
                    height={20}
                    width={20}
                  />
                </button>
              ))}
            </>
          ) : (
            <>
              {cities.map((elem) => (
                <>
                  <button>
                    <span>
                      <Image
                        src="/icons/navigation.svg"
                        alt="Navigation image"
                        height={20}
                        width={20}
                      />
                      {elem}
                    </span>
                    <Image
                      src="/icons/trending.svg"
                      alt="trending image"
                      height={20}
                      width={20}
                    />
                  </button>
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Location;
