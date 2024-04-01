"use client";
//style
import "react-calendar/dist/Calendar.css";
import style from "@/components/Navbar/Search.module.css";
import "./Calendar.css";
//libraries
import moment from "moment-timezone";
import Calendar from "react-calendar";
import React, { useState } from "react";
import Image from "next/image";

//props
interface Props {
  heading: string;
}
//components
import ModalContainer from "./ModalContainer";
import InputOption from "./InputOption";
import SearchOption from "./SearchOption";
import ContainerWrapper from "../HomePage/ContainerWrapper";
import CategoryHeading from "../HomePage/CategoryHeading";
import StepController from "./StepController";
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
const Search: React.FC<Props> = ({ heading }) => {
  const [occasion, setOccasion] = useState<boolean>(false);
  const [occasionValue, setOccasionValue] = useState<string>("Type");
  const [relation, setRelation] = useState<boolean>(false);
  const [relationValue, setRelationValue] = useState<string>("for");
  const [citySearch, setCitySearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("select");
  const [date, setDate] = useState<string>("");

  //for city Search
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
  const occasionBlockerHandler = () => {
    alert("Please select the event occasion!");
  };
  const getOccasionValueHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setOccasionValue(value);
  };
  const prevOccasionHandler = () => {
    setOccasion(false);
    setCitySearch(true);
  };
  const nextOccasionHandler = () => {
    setOccasion(false);
    setRelation(true);
  };
  const relationHandler = () => {
    setRelation(!relation);
  };
  const relationBlockHandler = () => {
    alert("Select relation before search!");
  };
  const getRelationValueHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setRelationValue(value);
  };
  const prevRelationHandler = () => {
    setRelation(false);
    setOccasion(true);
  };
  const searchRelationHandler = () => {
    setRelation(false);
  };

  const citySearchHandler = () => {
    setCitySearch(!citySearch);
  };

  const dateBlockerHandler = () => {
    alert("Please select date first!");
  };
  const nextCalendarHandler = () => {
    const data = new Date(JSON.parse(date));
    const indianDate = moment(data).tz("Asia/kolkata");
    const formateDate = indianDate.format("DD-MM-YYYY");
    setSearchValue(formateDate);
    alert(`Your eventdate is ${formateDate}`);
    setCitySearch(false);
    setOccasion(true);
  };
  return (
    <>
      <ContainerWrapper>
        {heading.length === 0 ? null : (
          <CategoryHeading heading={heading} text="" isBorder={false} />
        )}

        <div className={style.container}>
          <SearchOption
            heading="Date"
            subText={searchValue}
            option1=""
            option2=""
            modalClick={citySearchHandler}
            isTypingEffect={false}
            baseTextType={searchValue}
          />
          <span className={style.vLine}></span>
          <SearchOption
            heading="Occasion"
            subText={occasionValue}
            option1=""
            option2=""
            modalClick={citySearchHandler}
            isTypingEffect={false}
            baseTextType=""
          />
          <span className={style.vLine}></span>
          <div className={style.relationBox}>
            <div onClick={citySearchHandler}>
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
      </ContainerWrapper>

      {/* For Calendar Location */}
      {citySearch && (
        // <ModalContainer
        //   closeFunction={citySearchHandler}
        //   heading="Where"
        //   subText="Search your location or city"
        //   headingIcon=""
        // >
        //   <div className={style.searchContainer}>
        //     <input
        //       type="text"
        //       placeholder="Search city"
        //       required
        //       value={searchTerm}
        //       onChange={onChangeHandler}
        //     />
        //   </div>
        //   {inputLength.length > 0 && (
        //     <div className={style.cityList}>
        //       {inputLength.length > 0 &&
        //         searchResults.map((elem) => (
        //           <>
        //             <p key={elem}>
        //               <span>
        //                 <Image
        //                   src="/icons/location.svg"
        //                   alt="Location Image"
        //                   height={25}
        //                   width={25}
        //                 />
        //               </span>
        //               {elem}
        //             </p>
        //           </>
        //         ))}
        //     </div>
        //   )}
        // </ModalContainer>
        <ModalContainer
          closeFunction={citySearchHandler}
          heading="Event Date"
          subText="Select event date"
          headingIcon="/icons/caledar.svg"
        >
          <Calendar
            minDate={new Date()}
            className="calendarBox"
            view="month"
            onClickDay={(res) => setDate(JSON.stringify(res))}
          />
          <StepController
            isPrevBtn={false}
            prevFnc=""
            isPrevBtnValue=""
            stateComponent={date}
            stateComponentValue=""
            blockFnc={dateBlockerHandler}
            nextBtnValue="Next"
            isNextIcon=""
            nextFnc={nextCalendarHandler}
          />
        </ModalContainer>
      )}
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
          <StepController
            isPrevBtn={true}
            prevFnc={prevOccasionHandler}
            isPrevBtnValue="Prev"
            stateComponent={occasionValue}
            stateComponentValue="Type"
            blockFnc={occasionBlockerHandler}
            nextBtnValue="Next"
            isNextIcon=""
            nextFnc={nextOccasionHandler}
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
          <StepController
            isPrevBtn={true}
            prevFnc={prevRelationHandler}
            isPrevBtnValue="Prev"
            stateComponent={relationValue}
            stateComponentValue="for"
            blockFnc={relationBlockHandler}
            nextBtnValue="Search"
            isNextIcon="/icons/white-search.svg"
            nextFnc={searchRelationHandler}
          />
        </ModalContainer>
      )}
    </>
  );
};

export default Search;
