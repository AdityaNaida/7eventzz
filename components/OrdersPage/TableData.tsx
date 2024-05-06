import Image from "next/image";

import style from "@/components/OrdersPage/TableData.module.css";

export default function TableData({
  orderNumber,
  OrderDate,
  isDelivered,
  deliveryTime,
  TotalPrice,
  controller,
}: {
  orderNumber: number;
  OrderDate: string;
  isDelivered: boolean;
  deliveryTime: string;
  TotalPrice: number;
  controller: () => void;
}) {
  return (
    <>
      <tr className={style.TableRow}>
        <td>{orderNumber}</td>
        <td>{OrderDate}</td>
        <td>
          {isDelivered ? (
            <p>
              <span className={style.delivered}></span> Delivered
            </p>
          ) : (
            <p>
              <span className={style.pending}></span> Pending
            </p>
          )}
        </td>
        <td>{deliveryTime}</td>
        <td>₹{TotalPrice}</td>
        <td>
          <button className={style.viewBtn} onClick={controller}>
            <Image src="/icons/eye.svg" alt="eye icon" height={20} width={20} />
          </button>
        </td>
      </tr>
    </>
  );
}
