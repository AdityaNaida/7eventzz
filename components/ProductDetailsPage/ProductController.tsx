"use client";
//libraries
import moment from "moment-timezone";
import Calendar from "react-calendar";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const [textDate, setTextDate] = useState<string>("Select Date & Time");
  const [date, setDate] = useState<string>("");
  const [timeSlots, setTimeSlots] = useState<boolean>(false);

  const [activeTimeSlot, setActiveTimeSlot] = useState<number | null>(null);
  const [timeChunk, setTimeChunk] = useState<string>("");

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
    alert(`Your booking date is ${formateDate}`);
    setCalendar(false);
    setTimeSlots(true);
  };

  const timeSlotsHandler = () => {
    setTimeSlots(!timeSlots);
  };
  const handleTimeSlotClick = (buttonIndex: number) => {
    setActiveTimeSlot(buttonIndex === activeTimeSlot ? null : buttonIndex);
  };
  const getTimeChunk = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = new Date(JSON.parse(date));
    const indianTimezone = moment(data).tz("Asia/kolkata");
    const formateDate = indianTimezone.format("DD-MM-YYYY");

    setTextDate(`${formateDate} ${e.target.value}`);
    setTimeChunk(e.target.value);
  };

  const timeSlotPrev = () => {
    setCalendar(true);
    setTimeSlots(false);
  };
  const timeSlotNext = () => {
    setTimeSlots(false);
  };

  const timeSlotBlockerHandler = () => {
    alert("Please select the timeslot!");
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
      <SelectOptions
        heading="Select Date & Time"
        value={textDate}
        Bfnc={calendarHandler}
        img="/icons/red_calendar.svg"
        isAnimate=""
      />
      {city && (
        <Modal offModal={cityHandler}>
          <Location closeBtn={cityHandler} />
        </Modal>
      )}
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
            <div className={style.container}>
              <p className={style.txt}>
                Need service today or unable to find preferred time or date?
              </p>
              <Link
                href="https://wa.me/8240590169"
                className={style.whatsappBtn}
              >
                <Image
                  src="/icons/whatsapp.webp"
                  alt="whatsapp icon"
                  height={20}
                  width={20}
                  unoptimized
                  className={style.whatsappIcon}
                />
                Whatsapp
              </Link>
              <Link href="tel:8240590169" className={style.actionCallBtn}>
                <Image
                  src="/icons/telephone.webp"
                  alt="telephone icon"
                  height={20}
                  width={20}
                  unoptimized
                  className={style.whatsappIcon}
                />
                Call us
              </Link>
            </div>
          </ModalContainer2>
        </>
      )}

      {timeSlots && (
        <ModalContainer2
          heading="Time Slot"
          subText="Select event timing"
          closeFunction={timeSlotsHandler}
          headingIcon="/icons/schedule.webp"
        >
          <div className={style.timeSlotContainer}>
            <label htmlFor="morning" className={style.timeSlots}>
              <p className={style.timeText}>
                <input
                  type="radio"
                  id="morning"
                  name="timeslot"
                  onClick={() => handleTimeSlotClick(1)}
                />{" "}
                Morning Delivery{" "}
                <span className={style.delievryCharge}>₹200</span>
              </p>
              <Image
                src={`/icons/${
                  activeTimeSlot === 1 ? "chevron_up" : "chevron_down"
                }.svg`}
                alt="chevron image"
                height={20}
                width={20}
              />
            </label>
            {activeTimeSlot === 1 && (
              <div className={style.timeChunks}>
                <label htmlFor="7amto9am" className={style.timeHourly}>
                  <input
                    type="radio"
                    id="7amto9am"
                    value="(07:00 AM - 09:00 AM)"
                    name="hour"
                    onChange={getTimeChunk}
                  />
                  07:00 AM - 09:00 AM
                </label>
                <label htmlFor="9amto11am" className={style.timeHourly}>
                  <input
                    type="radio"
                    id="9amto11am"
                    value="(09:00 AM - 11:00 AM)"
                    name="hour"
                    onChange={getTimeChunk}
                  />
                  09:00 AM - 11:00 AM
                </label>
                <label htmlFor="11amto1pm" className={style.timeHourly}>
                  <input
                    type="radio"
                    id="11amto1pm"
                    value="(11:00 AM - 01:00 PM)"
                    name="hour"
                    onChange={getTimeChunk}
                  />
                  11:00 AM - 01:00 PM
                </label>
              </div>
            )}
            <label htmlFor="afternoon" className={style.timeSlots}>
              <p className={style.timeText}>
                <input
                  type="radio"
                  id="afternoon"
                  name="timeslot"
                  onClick={() => handleTimeSlotClick(2)}
                />{" "}
                Afternoon Delivery{" "}
                <span className={style.delievryCharge}>₹300</span>
              </p>
              <Image
                src={`/icons/${
                  activeTimeSlot === 2 ? "chevron_up" : "chevron_down"
                }.svg`}
                alt="chevron image"
                height={20}
                width={20}
              />
            </label>
            {activeTimeSlot === 2 && (
              <div className={style.timeChunks}>
                <label htmlFor="1pmto3pm" className={style.timeHourly}>
                  <input
                    type="radio"
                    id="1pmto3pm"
                    value="(01:00 PM - 03:00 PM)"
                    name="hour"
                    onChange={getTimeChunk}
                  />
                  01:00 PM - 03:00 PM
                </label>
                <label htmlFor="3pmto5pm" className={style.timeHourly}>
                  <input
                    type="radio"
                    id="3pmto5pm"
                    value="(03:00 PM - 05:00 PM)"
                    name="hour"
                    onChange={getTimeChunk}
                  />
                  03:00 PM - 05:00 PM
                </label>
              </div>
            )}

            <label htmlFor="evening" className={style.timeSlots}>
              <p className={style.timeText}>
                <input
                  type="radio"
                  id="evening"
                  name="timeslot"
                  onClick={() => handleTimeSlotClick(3)}
                />{" "}
                Evening Delivery{" "}
                <span className={style.delievryCharge}>₹400</span>
              </p>
              <Image
                src={`/icons/${
                  activeTimeSlot === 3 ? "chevron_up" : "chevron_down"
                }.svg`}
                alt="chevron image"
                height={20}
                width={20}
              />
            </label>
            {activeTimeSlot === 3 && (
              <div className={style.timeChunks}>
                <label htmlFor="5pmto7pm" className={style.timeHourly}>
                  <input
                    type="radio"
                    id="5pmto7pm"
                    value="(05:00 PM - 07:00 PM)"
                    name="hour"
                    onChange={getTimeChunk}
                  />
                  05:00 PM - 07:00 PM
                </label>
                <label htmlFor="7pmto9pm" className={style.timeHourly}>
                  <input
                    type="radio"
                    id="7pmto9pm"
                    value="(07:00 PM - 09:00 PM)"
                    name="hour"
                    onChange={getTimeChunk}
                  />
                  07:00 PM - 09:00 PM
                </label>
                <label htmlFor="9pmto11pm" className={style.timeHourly}>
                  <input
                    type="radio"
                    id="9pmto11pm"
                    value="(09:00 PM - 11:00 PM)"
                    name="hour"
                    onChange={getTimeChunk}
                  />
                  09:00 PM - 11:00 PM
                </label>
              </div>
            )}
            <label htmlFor="midnight" className={style.timeSlots}>
              <p className={style.timeText}>
                <input
                  type="radio"
                  id="midnight"
                  name="timeslot"
                  onClick={() => handleTimeSlotClick(4)}
                />{" "}
                Mid Night Delivery{" "}
                <span className={style.delievryCharge}>₹500</span>
              </p>
              <Image
                src={`/icons/${
                  activeTimeSlot === 4 ? "chevron_up" : "chevron_down"
                }.svg`}
                alt="chevron image"
                height={20}
                width={20}
              />
            </label>
            {activeTimeSlot === 4 && (
              <div className={style.timeChunks}>
                <label htmlFor="11pmto1am" className={style.timeHourly}>
                  <input
                    type="radio"
                    id="11pmto1am"
                    value="(11:00 PM - 01:00 AM)"
                    name="hour"
                    onChange={getTimeChunk}
                  />
                  11:00 PM - 01:00 AM
                </label>
              </div>
            )}
          </div>
          <StepController
            isPrevBtn={true}
            prevFnc={timeSlotPrev}
            isPrevBtnValue="Prev"
            stateComponent={timeChunk}
            stateComponentValue=""
            blockFnc={timeSlotBlockerHandler}
            nextBtnValue="Next"
            isNextIcon=""
            nextFnc={timeSlotNext}
          />
        </ModalContainer2>
      )}
    </>
  );
};

export default ProductController;
