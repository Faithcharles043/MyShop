import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import Notiflix from "notiflix";
import { toast } from "react-toastify";

function Cart() {
  const myCart = useSelector((store) => store.cartReducer);
  const ourCart = myCart.cart;
  const dispatch = useDispatch();
  //   console.log(myCart.cart.length);

  // Function to decrease cart
  const decrementCart = () => {};

  // Create a notiflix function called confirm delete
  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      "E-Shop Confirm",
      "Are you sure you want to delete?",
      "Delete",
      "Cancel",
      function okCb() {
        deleteItem(id);
        toast.success("Item deleted successfully");
      },
      function cancelCb() {},
      {
        width: "320px",
        borderRadius: "8px",
        // okButtonBackground: "purple",
        // cancelButtonBackground: "red",
        // titleColor: "deeppink",
        // etc...
      }
    );
  };

  // Delete item function
  const deleteItem = (id) => {
    dispatch({ type: "DELETE_CART", payload: id });
  };

  return (
    <DefaultLayout>
      <div className="container">
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {ourCart.length === 0 ? (
                <h3 style={{ color: "red" }}>The cart is empty</h3>
              ) : (
                ourCart.map((item, index) => {
                  // Function to increase cart
                  const increaseCart = (item) => {
                    dispatch({
                      type: "UPDATE_CART",
                      payload: { ...item, quantity: item.quantity + 1 },
                    });
                  };

                  // Function to decrease cart
                  const decreaseCart = (item) => {
                    if (item.quantity !== 1) {
                      dispatch({
                        type: "UPDATE_CART",
                        payload: { ...item, quantity: item.quantity - 1 },
                      });
                    }
                  };

                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          width="130px"
                          height="100px"
                        />
                      </td>
                      <td>{item.name.substring(0, 25) + "..."}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <span>
                          <AiFillPlusCircle
                            style={{ fontSize: "24px", color: "green" }}
                            onClick={() => increaseCart(item)}
                          />
                          <span style={{ fontSize: "24px", margin: "0 6px" }}>
                            {item.quantity}
                          </span>
                          <AiFillMinusCircle
                            style={{ fontSize: "24px", color: "red" }}
                            onClick={() => decreaseCart(item)}
                          />
                        </span>
                      </td>
                      <td>{item.price * item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => confirmDelete(item)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Cart;
