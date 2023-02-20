import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomeItems({ item }) {
  const myCart = useSelector((store) => store.cartReducer);
  const ourCart = myCart.cart;

  // Use the find method to find if the user already added an item to the cart
  const isInCart = ourCart.find((i) => i.id === item.id);
  const dispatch = useDispatch();

  // const [showBtn, setShowBtn] = useState(false)

  // Add an event to the add to cart
  const addCart = () => {
    dispatch({ type: "ADD_CART", payload: { ...item, quantity: 1 } });
    console.log(item);
  };
  return (
    <div>
      <div
        className="card shadow p-3 mb-5 bg-body-tertiary rounded"
        data-aos="zoom-out-down"
        data-aos-duration="1500"
      >
        <div className="card-body">
          {/* <Link
            to={`/single-product/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}
          > */}
          <img
            src={item.image}
            alt=""
            className="img-fluid"
            width={250}
            height={230}
          />
          <h6 className="card-title">{item.name.substring(0, 30)}...</h6>
          <h5 className="card-title"> &#8358; {item.price}</h5>
          {/* </Link> */}

          {isInCart ? (
            <button
              className="btn btn-primary btnG"
              disabled
              onClick={addCart}
              style={{ cursor: "pointer" }}
            >
              ADD TO CART
            </button>
          ) : (
            <button
              className="btn btn-primary btnG"
              onClick={addCart}
              style={{ cursor: "pointer" }}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeItems;
