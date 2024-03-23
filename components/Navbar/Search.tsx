"use client";
//libraries
import React, { useState } from "react";
import Image from "next/image";
//style
import style from "@/components/Navbar/Search.module.css";
//components
import ModalContainer from "./ModalContainer";
import InputOption from "./InputOption";
import SearchOption from "./SearchOption";

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
const Search: React.FC = () => {
  const [occasion, setOccasion] = useState<boolean>(false);
  const [occasionValue, setOccasionValue] = useState<string>("Type");
  const [relation, setRelation] = useState<boolean>(false);
  const [relationValue, setRelationValue] = useState<string>("for");
  const [citySearch, setCitySearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("Select your");
  const [inputLength, setInputLength] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase();
    setSearchTerm(userInput);
    const filter = cities.filter((elem) =>
      elem.toLowerCase().includes(userInput)
    );
    setSearchResults(filter);
    setInputLength(e.target.value);
  };

  const occasionHandler = () => {
    setOccasion(!occasion);
  };
  const getOccasionValueHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setOccasionValue(value);
    setTimeout(() => {
      setOccasion(false);
    }, 300);
  };
  const relationHandler = () => {
    setRelation(!relation);
  };
  const getRelationValueHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setRelationValue(value);
    setTimeout(() => {
      setRelation(false);
    }, 300);
  };
  const citySearchHandler = () => {
    setCitySearch(!citySearch);
  };
  return (
    <>
      <div className={style.containerWrapper}>
        <h2>Find Decor</h2>
        <div className={style.container}>
          <SearchOption
            heading="Your"
            subText={searchValue}
            option1="location"
            option2="city"
            modalClick={citySearchHandler}
            isTypingEffect={true}
            baseTextType={searchValue}
          />
          <span className={style.vLine}></span>
          <SearchOption
            heading="Occasion"
            subText={occasionValue}
            option1=""
            option2=""
            modalClick={occasionHandler}
            isTypingEffect={false}
            baseTextType=""
          />
          <span className={style.vLine}></span>
          <div className={style.relationBox}>
            <div onClick={relationHandler}>
              <p>Relation</p>
              <span>{relationValue}</span>
            </div>
            <button>
              <Image
                src="/icons/white-search.svg"
                alt="Searc Icon"
                height={25}
                width={25}
              />
            </button>
          </div>
        </div>
      </div>
      {/* For Occasion Modal */}
      {occasion && (
        <ModalContainer
          closeFunction={occasionHandler}
          heading="Select Occasion"
          subText="Type of decoration you're looking for"
          headingIcon="/icons/fire.svg"
        >
          <InputOption
            labelText="Birthday"
            labelId="birthday"
            InputType="radio"
            Inputname="occasion"
            valueFnc={getOccasionValueHandler}
          />
          <InputOption
            labelText="Anniversary"
            labelId="anniversary"
            InputType="radio"
            Inputname="occasion"
            valueFnc={getOccasionValueHandler}
          />
          <InputOption
            labelText="Love &amp; Romance"
            labelId="loveNromance"
            InputType="radio"
            Inputname="occasion"
            valueFnc={getOccasionValueHandler}
          />
          <InputOption
            labelText="Congratulations"
            labelId="congratulations"
            InputType="radio"
            Inputname="occasion"
            valueFnc={getOccasionValueHandler}
          />
          <InputOption
            labelText="Welcome Baby"
            labelId="welcomeBaby"
            InputType="radio"
            Inputname="occasion"
            valueFnc={getOccasionValueHandler}
          />
          <InputOption
            labelText="Haldi"
            labelId="haldi"
            InputType="radio"
            Inputname="occasion"
            valueFnc={getOccasionValueHandler}
          />
        </ModalContainer>
      )}
      {/* For Relation Modal */}
      {relation && (
        <ModalContainer
          closeFunction={relationHandler}
          heading="Relation"
          subText="Decoration for whom?"
          headingIcon="/icons/user-red.svg"
        >
          <InputOption
            labelText="Father"
            labelId="father"
            InputType="radio"
            Inputname="relation"
            valueFnc={getRelationValueHandler}
          />
          <InputOption
            labelText="Mother"
            labelId="mother"
            InputType="radio"
            Inputname="relation"
            valueFnc={getRelationValueHandler}
          />
          <InputOption
            labelText="Kids"
            labelId="kids"
            InputType="radio"
            Inputname="relation"
            valueFnc={getRelationValueHandler}
          />
          <InputOption
            labelText="Brother"
            labelId="brother"
            InputType="radio"
            Inputname="relation"
            valueFnc={getRelationValueHandler}
          />
          <InputOption
            labelText="Sister"
            labelId="sister"
            InputType="radio"
            Inputname="relation"
            valueFnc={getRelationValueHandler}
          />
          <InputOption
            labelText="Nani"
            labelId="nani"
            InputType="radio"
            Inputname="relation"
            valueFnc={getRelationValueHandler}
          />
          <InputOption
            labelText="Nana"
            labelId="nana"
            InputType="radio"
            Inputname="relation"
            valueFnc={getRelationValueHandler}
          />
        </ModalContainer>
      )}
      {/* For Search Modal */}
      {citySearch && (
        <ModalContainer
          closeFunction={citySearchHandler}
          heading="Where"
          subText="Search your location or city"
          headingIcon=""
        >
          <div className={style.searchContainer}>
            <input
              type="text"
              placeholder="Search city"
              required
              value={searchTerm}
              onChange={onChangeHandler}
            />
          </div>
          {inputLength.length > 0 && (
            <div className={style.cityList}>
              {inputLength.length > 0 &&
                searchResults.map((elem) => (
                  <>
                    <p key={elem}>
                      <span>
                        <Image
                          src="/icons/location.svg"
                          alt="Location Image"
                          height={25}
                          width={25}
                        />
                      </span>
                      {elem}
                    </p>
                  </>
                ))}
            </div>
          )}
        </ModalContainer>
      )}
    </>
  );
};

export default Search;
