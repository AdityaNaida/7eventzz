//components
import Hero from "./Hero";
import PopularCategories from "./PopularCategories";
import HeroMobile from "./HeroMobile";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Search from "../Navbar/Search";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroMobile />
      {/* <PopularCategories /> */}

      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Section3 />
      <Section6 />
      <Section7 />
      <Section6 />
      <Section6 />
      {/* <Search /> */}
    </>
  );
};

export default HomePage;
