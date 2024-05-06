"use client";
import { useState } from "react";

import style from "@/components/SupportTickets/SupportTickets.module.css";

import DashboardMenu from "../AccountSettings/DashboardMenu";
import Ticket from "./Ticket";
import Modal from "../Navbar/Modal";
export default function SupportTickets() {
  const [createTicket, setCreateTicket] = useState<boolean>(false);
  function ticketHandler() {
    setCreateTicket(!createTicket);
  }
  return (
    <>
      <div className={style.container}>
        <DashboardMenu />
        <div className={style.ticketContainer}>
          <div className={style.heading}>
            <h1>Support Ticket</h1>
            <button onClick={ticketHandler}>Create Ticket &#43;</button>
          </div>

          <div className={style.ticketList}>
            <Ticket
              message="When will the decorators arrive?"
              isClosed={false}
              date="Apr 13, 2024"
              route="/support-tickets/1234"
            />
            <Ticket
              message="Payment method isn't working"
              isClosed={false}
              date="May 02, 2024"
              route="/support-tickets/789"
            />
            <Ticket
              message="How much do I have to pay for"
              isClosed={true}
              date="Dec 25, 2023"
              route="/support-tickets/369"
            />
          </div>
        </div>
      </div>
      {createTicket && (
        <Modal offModal={ticketHandler}>
          <div className={style.ticketDialouge}>
            <div className={style.ticketHeading}>
              <p>Ticket</p>
              <button onClick={ticketHandler}>✕</button>
            </div>
            <form>
              <textarea
                name="ticket"
                id="ticket"
                placeholder="Ticket message..."
                className={style.messageBox}
              ></textarea>
              <button className={style.submitBtn}>Submit Ticket</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}
