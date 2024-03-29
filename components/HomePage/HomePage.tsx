//components
import Hero from "./Hero";
import PopularCategories from "./PopularCategories";
import HeroMobile from "./HeroMobile";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Search from "../Navbar/Search";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroMobile />
      {/* <PopularCategories /> */}
      {/* <Search /> */}
      <Section1 />
      <Section2 />
      <Section4 />
      <Section4 />
      <Section3 />
    </>
  );
};

export default HomePage;
