//style
import style from "@/components/CategoryPage/CategoryProducts.module.css";
//components
import ProductCarousel from "../HomePage/ProductCarousel";
const CategoryProducts: React.FC = () => {
  const API = [
    {
      img: "/p1.webp",
      name: "Sumptuous Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/productdetails",
    },
    {
      img: "/p2.webp",
      name: "Love You Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/productdetails",
    },
    {
      img: "/p3.webp",
      name: "Choco Truffle Heart Cake ",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/productdetails",
    },
    {
      img: "/p4.webp",
      name: "Dense Chocolate Delight Cake",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/productdetails",
    },
    {
      img: "/f1.webp",
      name: "10 Red Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/productdetails",
    },
    {
      img: "/f2.webp",
      name: "Paradise Mixed Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/productdetails",
    },
    {
      img: "/f3.webp",
      name: "Eternity White Roses Bouquet",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/productdetails",
    },
    {
      img: "/f4.webp",
      name: "Crimson Floral Embrace",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/productdetails",
    },
    {
      img: "/g1.webp",
      name: "Sumptuous Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/productdetails",
    },
    {
      img: "/g2.webp",
      name: "Love You Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/productdetails",
    },
    {
      img: "/g3.webp",
      name: "Choco Truffle Heart Cake ",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/productdetails",
    },
    {
      img: "/g4.webp",
      name: "Dense Chocolate Delight Cake",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/productdetails",
    },
    {
      img: "/f1.webp",
      name: "10 Red Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/productdetails",
    },
    {
      img: "/f2.webp",
      name: "Paradise Mixed Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/productdetails",
    },
    {
      img: "/f3.webp",
      name: "Eternity White Roses Bouquet",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/productdetails",
    },
    {
      img: "/f4.webp",
      name: "Crimson Floral Embrace",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/productdetails",
    },
  ];
  return (
    <>
      <div className={style.container}>
        {API.map((elem) => (
          <ProductCarousel
            name={elem.name}
            price={elem.price}
            beforePrice={elem.beforeprice}
            discount={elem.discount}
            reviews={elem.reviews}
            rating={elem.rating}
            path={elem.path}
            key={Math.random()}
            image={elem.img}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;
