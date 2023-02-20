import React, { useState } from "react";
// import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import products from "../products";
import HomeItems from "./HomeItems";

function Home() {
  const [product, setProduct] = useState(products);

  return (
    <DefaultLayout>
      <div className="container">
        <div className="row">
          {product.map((item) => {
            return (
              <div className="col-md-4">
                <HomeItems item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
