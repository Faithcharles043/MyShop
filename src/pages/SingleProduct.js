import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import products from "../products";

function SingleProduct() {
  const { id } = useParams();

  const findProduct = products.find((prod) => prod.id === Number(id));

  return (
    <DefaultLayout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-2">
              <div className="card-body">
                <img src={findProduct.image} alt="" className="img-fluid" />
                <h6>NAME: {findProduct.name}</h6>
                <h6>CATGORY {findProduct.category}</h6>
                <h5>PRICE &#8358; {findProduct.price}</h5>
                <button className="btn btn-primary">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default SingleProduct;
