"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import style from "@/components/OrdersPage/Orders.module.css";

import DashboardMenu from "../AccountSettings/DashboardMenu";
import TableData from "./TableData";
import Modal from "../Navbar/Modal";
export default function Orders() {
  const OrderListJSON = [
    {
      order_number: 8631,
      order_date: "18 Feb",
      is_delivered: false,
      order_delivery_time: "3 Mar",
      total_price: 5000,
    },
    {
      order_number: 8632,
      order_date: "4 Apr",
      is_delivered: true,
      order_delivery_time: "3 May",
      total_price: 7500,
    },
  ];
  const [detailsModal, setDetailsModal] = useState<boolean>(false);
  function detailsModalHandler() {
    setDetailsModal(!detailsModal);
  }
  return (
    <>
      <div className={style.container}>
        <DashboardMenu />
        <div className={style.ordersDetails}>
          <div className={style.heading}>
            <h1>My order list</h1>
            <form>
              <input type="text" placeholder="Search Order list" />
            </form>
          </div>
          <div className={style.orderTabel}>
            <table className={style.tabel}>
              <thead className={style.tabelHead}>
                <tr>
                  <th className={style.tabelHeader}>Order Number</th>
                  <th className={style.tabelHeader}> Order Date</th>
                  <th className={style.tabelHeader}> Status</th>
                  <th className={style.tabelHeader}> Event Time</th>
                  <th className={style.tabelHeader}> Total Price</th>
                  <th className={style.tabelHeader}> Details </th>
                </tr>
              </thead>
              <tbody className={style.tableBody}>
                {OrderListJSON.map((e) => (
                  <TableData
                    orderNumber={e.order_number}
                    OrderDate={e.order_date}
                    deliveryTime={e.order_delivery_time}
                    TotalPrice={e.total_price}
                    isDelivered={e.is_delivered}
                    key={Math.random()}
                    controller={detailsModalHandler}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {detailsModal && (
        <Modal offModal={detailsModalHandler}>
          <div className={style.orderDetails}>
            <div className={style.detailsHeading}>
              <h2>Order Details:</h2>
              <button onClick={detailsModalHandler}>✕</button>
            </div>
            <div className={style.orderSummary}>
              <div className={style.orderHeading}>
                <div>Image</div>
                <div>Items Name</div>
                <div>Quantity</div>
                <div>Price</div>
              </div>
              <div className={style.orderTableHolder}>
                <div className={style.orderTable}>
                  <div>
                    <Image
                      src="/extra.webp"
                      alt="extra image"
                      height={20}
                      width={20}
                      unoptimized
                    />
                  </div>
                  <div>
                    Surprise Room Decoration
                    <p>Time: (04:00 AM - 06.00 AM)</p>
                  </div>
                  <div>1</div>
                  <div>₹1999</div>
                </div>
                <div className={style.orderTable}>
                  <div>
                    <Image
                      src="/addon5.webp"
                      alt="addon image"
                      height={20}
                      width={20}
                      unoptimized
                    />
                  </div>
                  <div>Two Hersheys Milk Chocolates Each 33 gm</div>
                  <div>1</div>
                  <div>₹600</div>
                </div>
              </div>
            </div>
            <div className={style.bill}>
              <h2>Price Details</h2>
              <p>
                <span>Base Total</span>
                <span>
                  <b>₹ 1800</b>
                </span>
              </p>
              <p>
                <span>Add On Total</span>
                <span>
                  <b>₹ 600</b>
                </span>
              </p>
              <p>
                <span>
                  Delivery
                  <samp className={style.deliveryType}>Evening</samp>
                </span>
                <span>
                  <b>₹ 600</b>
                </span>
              </p>
              <p>
                <span>Total Amount</span>
                <span>
                  <b>₹ 2400</b>
                </span>
              </p>
              <p>
                <span>Coupen Discount</span>
                <span>-</span>
              </p>
              <p>
                <span>
                  <b>Amount To Pay</b>
                </span>
                <span>
                  <b>₹ 2400</b>
                </span>
              </p>

              <button className={style.invoiceBtn}>Download Invoice</button>
              <Link href="/">Cancle Order</Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
