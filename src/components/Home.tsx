import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import { useState } from "react";

const Home = () => {
  faker.seed(100);
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [products] = useState(productArray);

  // console.log(cart);
  return (
    <div className="products">
      {products.map((item) => {
        return <SingleProduct key={item.id} prod={item} />;
      })}
    </div>
  );
};

export default Home;
