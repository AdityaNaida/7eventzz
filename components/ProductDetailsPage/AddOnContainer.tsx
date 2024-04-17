//libraries
import Link from "next/link";
//styles
import style from "@/components/ProductDetailsPage/AddOnContainer.module.css";
//components
import AddOnProduct from "./AddOnProduct";
import AddonCategoryBtn from "./AddonCategoryBtn";
export default function AddOnContainer({ closeFnc }: { closeFnc: () => void }) {
  const addOnAPI = [
    {
      name: "Magic Candles",
      price: 59,
      img: "/addon1.webp",
    },
    {
      name: "Forever Love Greeting Card",
      price: 129,
      img: "/addon2.webp",
    },
    {
      name: "6 Red Roses Bunch",
      price: 385,
      img: "/addon3.webp",
    },
    {
      name: "Birthday Card",
      price: 129,
      img: "/addon4.webp",
    },
    {
      name: "10 Inch Puppy Love Teddy",
      price: 459,
      img: "/addon5.webp",
    },
    {
      name: "Two Hersheys Milk Chocolates Each 33 gm",
      price: 299,
      img: "/addon6.webp",
    },
    {
      name: "Single Red Rose",
      price: 149,
      img: "/addon7.webp",
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.headingContainer}>
          <p className={style.heading}>Add on something to make it special!</p>
          <span className={style.closeBtn} onClick={closeFnc}>
            &#x2715;
          </span>
        </div>
        <div className={style.categories}>
          <AddonCategoryBtn value="All" isActive={true} />
          <AddonCategoryBtn value="Flowers" isActive={false} />
          <AddonCategoryBtn value="Cakes" isActive={false} />
          <AddonCategoryBtn value="Plats" isActive={false} />
        </div>
        <div className={style.items}>
          {addOnAPI.map((elem) => (
            <>
              <AddOnProduct
                productName={elem.name}
                price={elem.price}
                img={elem.img}
                key={Math.random()}
              />
            </>
          ))}
        </div>
        <div className={style.pricing}>
          <div className={style.allPrices}>
            <p className={style.priceText}>
              <b>Base Price:</b> ₹770
            </p>
            <p className={style.priceText}>
              <b>Addon Price:</b> ₹0
            </p>
            <p className={style.priceText}>
              <b>Total Price:</b> ₹770
            </p>
          </div>
          <div className={style.controllers}>
            <Link href="/cart" className={style.skinBtn}>
              Skip
            </Link>
            <Link href="/cart" className={style.proceedBtn}>
              Proceed
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
