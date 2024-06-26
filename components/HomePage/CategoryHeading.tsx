//styles
import style from "@/components/HomePage/CategoryHeading.module.css";
//props
interface Props {
  heading: string;
  text: string;
  isBorder: boolean;
}
const CategoryHeading: React.FC<Props> = ({ heading, text, isBorder }) => {
  return (
    <>
      <div className={style.container}>
        <h2 className={isBorder ? style.heading : style.headingNoBorder}>
          {heading}
        </h2>
        <p className={style.text}>{text}</p>
      </div>
    </>
  );
};

export default CategoryHeading;
