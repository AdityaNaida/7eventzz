//libraries
import Image from "next/image";
//style
import style from "@/components/Navbar/StepController.module.css";
//props
interface Props {
  isPrevBtn: boolean;
  isPrevBtnValue: string;
  prevFnc: any;
  stateComponent: string;
  stateComponentValue: string;
  blockFnc: any;
  nextFnc: any;
  nextBtnValue: string;
  isNextIcon: string;
}
const StepController: React.FC<Props> = ({
  isPrevBtn,
  prevFnc,
  isPrevBtnValue,
  stateComponent,
  stateComponentValue,
  blockFnc,
  nextFnc,
  nextBtnValue,
  isNextIcon,
}) => {
  return (
    <>
      <div className={style.container}>
        {isPrevBtn && <button onClick={prevFnc}>{isPrevBtnValue}</button>}
        {stateComponent !== stateComponentValue ? (
          <button onClick={nextFnc} className={style.rightBtn}>
            {nextBtnValue}
            {isNextIcon.length > 0 && (
              <Image
                src={isNextIcon}
                alt={`${isNextIcon} Image`}
                height={20}
                width={20}
              />
            )}
          </button>
        ) : (
          <button className={style.disabled} onClick={blockFnc}>
            {nextBtnValue}
            {isNextIcon.length > 0 && (
              <Image
                src={isNextIcon}
                alt={`${isNextIcon} Image`}
                height={20}
                width={20}
              />
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default StepController;
