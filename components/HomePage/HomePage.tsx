//components
import Hero from "./Hero";
import PopularCategories from "./PopularCategories";
import HeroMobile from "./HeroMobile";
import Section1 from "./Section1";
import Search from "../Navbar/Search";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroMobile />
      {/* <PopularCategories /> */}
      <Search />
      <Section1 />
    </>
  );
};

export default HomePage;
