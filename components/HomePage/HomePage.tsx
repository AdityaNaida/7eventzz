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
import FaqWrapper from "../FAQ/FaqWrapper";
import Faq from "../FAQ/Faq";
import SeoContent from "./SeoContent";
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
      <SeoContent />
      <FaqWrapper>
        <Faq
          faq1="What types of balloon decorations do you offer?"
          faq1a="We offer a wide variety of balloon decorations, including balloon arches, garlands, columns, centerpieces, organic balloon installations, balloon sculptures, and more! Browse our website or contact us for custom designs.
"
        />
        <Faq
          faq1="Do you deliver and set up the decorations?"
          faq1a="Yes, we offer delivery and setup for an additional fee within our service area. You can also choose to pick up your order at our location.
"
        />
        <Faq
          faq1="How far in advance should I book my order?"
          faq1a="We recommend booking at least 2 weeks in advance to ensure availability, especially for larger events. However, we can try to accommodate last-minute requests depending on our schedule."
        />
        <Faq
          faq1="Can I customize my order?"
          faq1a="Absolutely! We encourage you to tell us your vision and we will work with you to create a personalized balloon decoration that fits your theme and budget."
        />
        <Faq
          faq1="Do you offer balloon rentals?"
          faq1a="Not currently, but we are always looking for ways to improve our services."
        />
        <Faq
          faq1="What type of balloons do you use?"
          faq1a="We use high-quality, biodegradable latex balloons as well as Mylar balloons for specific designs."
        />
      </FaqWrapper>
      {/* <Search /> */}
    </>
  );
};

export default HomePage;
