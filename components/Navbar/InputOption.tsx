//style
import style from "@/components/Navbar/InputOption.module.css";

//props
interface Props {
  valueFnc: any;
  labelText: string;
  labelId: string;
  InputType: string;
  Inputname: string;
}
const InputOption: React.FC<Props> = ({
  valueFnc,
  labelText,
  labelId,
  InputType,
  Inputname,
}) => {
  return (
    <>
      <div className={style.container}>
        <input
          value={labelText}
          name={Inputname}
          onClick={valueFnc}
          type={InputType}
          id={labelId}
        />
        <label htmlFor={labelId}>{labelText}</label>
      </div>
    </>
  );
};
export default InputOption;
