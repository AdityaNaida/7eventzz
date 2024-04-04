//style
//components
import BreadCrumbs from "../DynamicPage/BreadCrumbs";
import Product from "./Product";
const ProductDetailsPage: React.FC = () => {
  return (
    <>
      <BreadCrumbs main="Category" subText="Chocolate Truffle Cake" />
      <Product />
    </>
  );
};

export default ProductDetailsPage;
