//libraries
import TypewriterComponent from "typewriter-effect";

//styles
import style from "@/components/Navbar/SearchOption.module.css";

//props
interface Props {
  heading: string;
  subText: string;
  isTypingEffect: boolean;
  modalClick: () => void;
  baseTextType: string;
  option1: string;
  option2: string;
}

const SearchOption: React.FC<Props> = ({
  heading,
  subText,
  isTypingEffect,
  modalClick,
  baseTextType,
  option1,
  option2,
}) => {
  return (
    <div className={style.container} onClick={modalClick}>
      <p>{heading}</p>
      <span>
        {isTypingEffect ? (
          <>
            <TypewriterComponent
              options={{
                strings: [option1, option2],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </>
        ) : (
          subText
        )}
      </span>
    </div>
  );
};

export default SearchOption;
