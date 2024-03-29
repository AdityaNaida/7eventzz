//styles
import style from "@/components/HomePage/Section7.module.css";
//componentd
import ContainerWrapper from "./ContainerWrapper";
import CategoryHeading from "./CategoryHeading";
import RoundCategory from "./RoundCategory";

const Section7: React.FC = () => {
  const categoryAPI = [
    {
      image: "/cake1.webp",
      path: "/",
      text: "Birthday",
      id: Math.random(),
    },
    {
      image: "/cake2.webp",
      path: "/",
      text: "Anniversary",
      id: Math.random(),
    },
    {
      image: "/cake3.webp",
      path: "/",
      text: "Welcome",
      id: Math.random(),
    },
    {
      image: "/cake4.webp",
      path: "/",
      text: "Festival",
      id: Math.random(),
    },
    {
      image: "/cake5.webp",
      path: "/",
      text: "Car",
      id: Math.random(),
    },
    {
      image: "/cake6.webp",
      path: "/",
      text: "Cabana",
      id: Math.random(),
    },
  ];
  return (
    <>
      <ContainerWrapper>
        <CategoryHeading
          heading="Other Categories"
          text="Other Categories"
          isBorder={true}
        />
        <div className={style.container}>
          {categoryAPI.map((elem) => (
            <RoundCategory
              text={elem.text}
              path={elem.path}
              img={elem.image}
              key={elem.id}
            />
          ))}
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Section7;
