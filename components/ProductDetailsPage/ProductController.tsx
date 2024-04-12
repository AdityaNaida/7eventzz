"use client";
//libraries
import moment from "moment-timezone";
import Calendar from "react-calendar";
import { useState, useEffect, useRef } from "react";
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
const ProductController: React.FC = () => {
  const [city, setCity] = useState<boolean>(false);
  const [calendar, setCalendar] = useState<boolean>(false);
  const [textDate, setTextDate] = useState<string>("Select Date & Time");
  const [date, setDate] = useState<string>("");
  const [activeTimeSlot, setActiveTimeSlot] = useState<number | null>(null);
  const [timeChunk, setTimeChunk] = useState<string>("");

  const [currentDate, setCurrentDate] = useState<string>("");
  const [upcomingDates, setUpcomingDates] = useState<
    { date: Date; dayName: string }[]
  >([]);

  const calendarSlider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //formating data
    const formatDate = (date: Date) => {
      const dayName = date.toLocaleString("default", { weekday: "long" });
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();
      return `${dayName}, ${day} ${month} ${year}`;
    };

    //get current date
    const today = new Date();
    setCurrentDate(formatDate(today));

    //get upcoming 7 days
    const upcomingDays = [];
    for (let i = 0; i <= 29; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const dayName = nextDate.toLocaleString("default", { weekday: "short" });
      upcomingDays.push({ date: nextDate, dayName });
    }

    setUpcomingDates(upcomingDays);
  }, []);

  const handleDateClick = (date: Date) => {
    // const formattedDate = `${date.toLocaleString("default", {
    //   weekday: "long",
    // })}, ${date.getDate()}${date.toLocaleString("default", {
    //   month: "long",
    // })} ${date.getFullYear()}`;
    const formattedDate = `${date.getDate()}-${date.toLocaleString("default", {
      month: "numeric",
    })}-${date.getFullYear()}`;

    setDate(formattedDate);
    console.log(formattedDate);
  };

  const cityHandler = () => {
    setCity(!city);
  };
  const dateBlockerHandler = () => {
    alert("Please select date first!");
  };
  const calendarHandler = () => {
    setCalendar(!calendar);
  };

  const handleTimeSlotClick = (buttonIndex: number) => {
    setActiveTimeSlot(
      buttonIndex === activeTimeSlot ? buttonIndex : buttonIndex
    );
  };
  const getTimeChunk = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = new Date(JSON.parse(date));
    const indianTimezone = moment(data).tz("Asia/kolkata");
    const formateDate = indianTimezone.format("DD-MM-YYYY");
    setTextDate(`${formateDate} ${e.target.value}`);
    setTimeChunk(e.target.value);
  };

  const timeBlockerHandler = () => {
    alert("Please select the time");
  };

  const nextClick = () => {
    alert(`You booked on ${textDate}`);
    setCalendar(false);
  };

  const rightClick = () => {
    if (calendarSlider.current) {
      calendarSlider.current.scrollLeft += calendarSlider.current.offsetWidth;
    }
  };

  const leftClick = () => {
    if (calendarSlider.current) {
      calendarSlider.current.scrollLeft -= calendarSlider.current.offsetWidth;
    }
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
            <div className={style.dayListWrapper}>
              <Image
                src="/icons/chevron-left.svg"
                alt="Chevron left image"
                height={20}
                width={20}
                onClick={leftClick}
              />
              <div className={style.dayList} ref={calendarSlider}>
                {upcomingDates.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateClick(item.date)}
                    className={style.dayButton}
                  >
                    <p>{` 
                  ${item.date.toLocaleString("default", {
                    month: "short",
                  })}`}</p>
                    <b>{` ${item.date.getDate()} `}</b>
                    <p>{`${item.dayName}`}</p>
                  </button>
                ))}
                <button className={style.calendarBtn}>
                  <Image
                    src="/icons/calendar-icon.svg"
                    alt="calendar icon"
                    height={20}
                    width={20}
                  />
                  <p>
                    Select Date{" "}
                    <Image
                      src="/icons/pencil.svg"
                      alt="pencil icon"
                      height={10}
                      width={10}
                    />
                  </p>
                </button>
              </div>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron right image"
                height={20}
                width={20}
                onClick={rightClick}
              />
            </div>
            {/* <Calendar
              minDate={new Date()}
              className="calendarBox"
              view="month"
              onClickDay={(res) => setDate(JSON.stringify(res))}
            /> */}
            {date && (
              <div className={style.buttonsWrapper}>
                <p className={style.timeTxt}>Select Time</p>
                <div className={style.deliveryButtonContainer}>
                  <button
                    className={`${style.deliveryBtns} ${
                      activeTimeSlot === 1 && style.activedeliveryBtns
                    }`}
                    onClick={() => handleTimeSlotClick(1)}
                  >
                    <p>Morning </p>
                    <b>₹200</b>
                  </button>
                  <button
                    className={`${style.deliveryBtns} ${
                      activeTimeSlot === 2 && style.activedeliveryBtns
                    }`}
                    onClick={() => handleTimeSlotClick(2)}
                  >
                    <p>Afternoon </p>
                    <b>₹300</b>
                  </button>
                  <button
                    className={`${style.deliveryBtns} ${
                      activeTimeSlot === 3 && style.activedeliveryBtns
                    }`}
                    onClick={() => handleTimeSlotClick(3)}
                  >
                    <p>Evening </p>
                    <b>₹400</b>
                  </button>
                  <button
                    className={`${style.deliveryBtns} ${
                      activeTimeSlot === 4 && style.activedeliveryBtns
                    }`}
                    onClick={() => handleTimeSlotClick(4)}
                  >
                    <p>Mid Night </p>
                    <b>₹500</b>
                  </button>
                </div>
              </div>
            )}
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
            {/* <div className={style.nextStepControlls}>
              {date === "" && (
                <button className={style.disabled} onClick={dateBlockerHandler}>
                  Next
                </button>
              )}
              {timeChunk === "" && (
                <button className={style.disabled} onClick={timeBlockerHandler}>
                  Next
                </button>
              )}
              {timeChunk && (
                <button className={style.active} onClick={nextClick}>
                  Next
                </button>
              )}
            </div> */}
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
    </>
  );
};

export default ProductController;
