//style
import style from "@/components/CategoryPage/CategoryPage.module.css";
//components
import BigHeading from "./BigHeading";
import CategoryList from "./CategoryList";
import Sort from "./Sort";
import QuickLinks from "./QuickLinks";
import CategoryProducts from "./CategoryProducts";
import BreadCrumbs from "../DynamicPage/BreadCrumbs";
import SeoContent from "../HomePage/SeoContent";
import FaqWrapper from "../FAQ/FaqWrapper";
import Faq from "../FAQ/Faq";

const CategoryPage: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <BreadCrumbs main="Category" subText="" />
        <BigHeading heading="Birthday Decoration at Home" />
        <CategoryList />
        <Sort />
        <QuickLinks />
        <CategoryProducts />
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
      </div>
    </>
  );
};

export default CategoryPage;
