import style from "@/components/CartPage/Assurance.module.css";

import AssuranceComp from "./AssuranceComp";

export default function Assurance() {
  return (
    <>
      <div className={style.container}>
        <AssuranceComp text="No Hidden Charges" img="/icons/nohidden.webp" />

        <AssuranceComp
          text="5 Millions Smiles Delivered"
          img="/icons/smile.svg"
        />
        <AssuranceComp text="100% Secure Payments" img="/icons/secure.svg" />
      </div>
    </>
  );
}
