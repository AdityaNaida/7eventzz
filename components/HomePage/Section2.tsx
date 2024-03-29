//styles
import style from "@/components/HomePage/Section2.module.css";
//components
import ContainerWrapper from "./ContainerWrapper";
import CategoryHeading from "./CategoryHeading";
import SquareCategory from "./SquareCategory";
const Section2: React.FC = () => {
  const categoryAPI = [
    {
      image: "/cats1.webp",
      path: "/",
      text: "Birthday",
      id: Math.random(),
    },
    {
      image: "/cats2.webp",
      path: "/",
      text: "Anniversary",
      id: Math.random(),
    },
    {
      image: "/cats3.webp",
      path: "/",
      text: "Welcome",
      id: Math.random(),
    },
    {
      image: "/cats4.webp",
      path: "/",
      text: "Festival",
      id: Math.random(),
    },
    {
      image: "/cats5.webp",
      path: "/",
      text: "Car",
      id: Math.random(),
    },
    {
      image: "/cats6.webp",
      path: "/",
      text: "Cabana",
      id: Math.random(),
    },
  ];
  return (
    <>
      <ContainerWrapper>
        <CategoryHeading
          heading="Top Categories"
          text="Most booked decoration categories"
          isBorder={true}
        />
        <div className={style.container}>
          {categoryAPI.map((elem) => (
            <SquareCategory
              img={elem.image}
              key={elem.id}
              text={elem.text}
              path={elem.path}
            />
          ))}
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Section2;
