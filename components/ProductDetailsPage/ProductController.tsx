"use client";
//libraries
import moment from "moment-timezone";
import Calendar from "react-calendar";
import { useState } from "react";
//styles
import style from "@/components/ProductDetailsPage/ProductController.module.css";
import "react-calendar/dist/Calendar.css";
import "../Navbar/Calendar.css";
//components
import SelectOptions from "./SelectOptions";
import Modal from "../Navbar/Modal";
import Location from "../Navbar/Location";
import ModalContainer2 from "./ModalContainer2";
import StepController from "../Navbar/StepController";
const ProductController: React.FC = () => {
  const [city, setCity] = useState<boolean>(false);
  const [calendar, setCalendar] = useState<boolean>(false);
  const [textDate, setTextDate] = useState<string>("Select Date");
  const [date, setDate] = useState<string>("");
  const cityHandler = () => {
    setCity(!city);
  };
  const dateBlockerHandler = () => {
    alert("Please select date first!");
  };
  const calendarHandler = () => {
    setCalendar(!calendar);
  };
  const nextTimeSlot = () => {
    const data = new Date(JSON.parse(date));
    const indianTimezone = moment(data).tz("Asia/kolkata");
    const formateDate = indianTimezone.format("DD-MM-YYYY");
    setTextDate(formateDate);
    setCalendar(false);
  };
  return (
    <>
      <SelectOptions
        heading="Delivery Location"
        value="Select your city"
        Bfnc={cityHandler}
        img="/icons/red_location.svg"
        isAnimate="Select City"
      />
      {city && (
        <Modal offModal={cityHandler}>
          <Location closeBtn={cityHandler} />
        </Modal>
      )}
      <SelectOptions
        heading="Delivery Date & Time"
        value={textDate}
        Bfnc={calendarHandler}
        img="/icons/red_calendar.svg"
        isAnimate=""
      />
      {calendar && (
        <>
          <ModalContainer2
            closeFunction={calendarHandler}
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
              nextFnc={nextTimeSlot}
            />
          </ModalContainer2>
        </>
      )}
    </>
  );
};

export default ProductController;
