//libraries
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/SelectOptions.module.css";
import { Span } from "next/dist/trace";
//props
interface Props {
  heading: string;
  value: string;
  Bfnc: () => void;
  img: string;
  isAnimate: string;
}
const SelectOptions: React.FC<Props> = ({
  heading,
  value,
  Bfnc,
  img,
  isAnimate,
}) => {
  return (
    <>
      <div className={style.container}>
        <p className={style.heading}>
          {heading}
          {isAnimate && <span className={style.animate}>{isAnimate}</span>}
        </p>
        <div>
          <button onClick={Bfnc} className={style.btn}>
            <Image src={img} alt={`${img} Image`} height={15} width={15} />
            {value}
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectOptions;
