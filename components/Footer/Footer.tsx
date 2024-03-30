//libraries
import Image from "next/image";
//style
import style from "@/components/Footer/Footer.module.css";
//components
import FooterCard from "./FooterCard";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import SubFooterLink from "./SubFooterLink";

const Footer: React.FC = () => {
  const moreLinksAPI = [
    {
      value: "Birthday Cake |",
      path: "/",
    },
    {
      value: "1st Birthday Cake |",
      path: "/",
    },
    {
      value: "Cocomelon Theme Cake |",
      path: "/",
    },
    {
      value: "Barbie Theme Cake |",
      path: "/",
    },
    {
      value: "Car Theme Cake |",
      path: "/",
    },
    {
      value: "Princess Theme Cake |",
      path: "/",
    },
    {
      value: "Peppa Pig Theme Cake |",
      path: "/",
    },
    {
      value: "Vanilla Cake |",
      path: "/",
    },
    {
      value: "Multi Tier Cake |",
      path: "/",
    },
    {
      value: "Spiderman Cake |",
      path: "/",
    },
    {
      value: "Annaprashan Cake |",
      path: "/",
    },
    {
      value: "Welcome Cake |",
      path: "/",
    },
    {
      value: "Cake for Mom |",
      path: "/",
    },
    {
      value: "Jungle Theme Cakes  |",
      path: "/",
    },
    {
      value: "Sugar-free Cake  |",
      path: "/",
    },
    {
      value: "Minion Theme Cake  |",
      path: "/",
    },
    {
      value: "Peppa Pig Cake  |",
      path: "/",
    },
  ];
  return (
    <>
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.gridContainer}>
            <FooterCard heading="Company" isLogo={false}>
              <FooterLinks path="/" value="About Us" />
              <FooterLinks path="/" value="Contact Us" />
              <FooterLinks path="/" value="Decorations" />
              <FooterLinks path="/" value="Our Impact" />
              <FooterLinks path="/" value="Carrers" />
            </FooterCard>
            <FooterCard heading="Privacy" isLogo={false}>
              <FooterLinks path="/" value="Terms & Conditions" />
              <FooterLinks path="/" value="Privacy Policy" />
              <FooterLinks path="/" value="Terms of Use" />
              <FooterLinks path="/" value="Disclaimer" />
            </FooterCard>
            <FooterCard heading="For Partners" isLogo={false}>
              <FooterLinks path="/" value="Register as a Vendor" />
              <FooterLinks path="/" value="Franchise" />
            </FooterCard>
            <FooterCard heading="7eventzz" isLogo={true}>
              <span>Follow Us</span>
              <div className={style.socialsContiner}>
                <SocialLinks img="/facebook_logo.webp" path="/" />
                <SocialLinks img="/twitter_logo.webp" path="/" />
                <SocialLinks img="/instagram_logo.webp" path="/" />
                <SocialLinks img="/youtube_logo.webp" path="/" />
                <SocialLinks img="/linkdin_logo.webp" path="/" />
                <SocialLinks img="/pinterest_logo.webp" path="/" />
              </div>
            </FooterCard>
          </div>
          <div className={style.subFooter}>
            <div>
              <Image
                src="/visa.webp"
                alt="visa image"
                height={50}
                width={50}
                unoptimized
              />
              <Image
                src="/mastercard.webp"
                alt="mastercard image"
                height={50}
                width={50}
                unoptimized
              />
              <Image
                src="/american_express.webp"
                alt="american_express image"
                height={50}
                width={50}
                unoptimized
              />
              <Image
                src="/google_pay.webp"
                alt="google_pay image"
                height={50}
                width={50}
                unoptimized
              />
            </div>
            <p>&copy; 2024 7eventzz.com - All rights reserved</p>
          </div>
          <FooterCard heading="Popular Categories" isLogo={false}>
            {moreLinksAPI.map((elem) => (
              <SubFooterLink
                value={elem.value}
                path={elem.path}
                key={Math.random()}
              />
            ))}
          </FooterCard>
          <FooterCard heading="Decorations" isLogo={false}>
            {moreLinksAPI.map((elem) => (
              <SubFooterLink
                value={elem.value}
                path={elem.path}
                key={Math.random()}
              />
            ))}
          </FooterCard>
          <FooterCard heading="Decoration Categories" isLogo={false}>
            {moreLinksAPI.map((elem) => (
              <SubFooterLink
                value={elem.value}
                path={elem.path}
                key={Math.random()}
              />
            ))}
          </FooterCard>
        </div>
      </footer>
    </>
  );
};

export default Footer;
