import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useState, useReduce } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartTotal, setCartTotal] = useState();
  //
  useEffect(() => {
    setCartTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div>
      <h1>
        <i>Cart Items: {cartTotal}</i>
      </h1>
      {cart.map((item) => (
        <div style={{ border: "1px solid grey" }}>
          <div style={{ marginLeft: "10px", marginTop: "5px" }}>
            <span>
              <b>qty </b>
            </span>
            <span>
              <input
                className="qtyInput"
                type="number"
                defaultValue={item.qty}
                onChange={(e) => {
                  dispatch({
                    type: "CHANGE_QTY",
                    payload: { ...item, qty: e.target.value }
                  });
                }}
              ></input>
            </span>
          </div>
          <div className="cartItem">
            <div>
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: 70, objectFit: "cover" }}
              ></img>
            </div>
            <span>{item.title}</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
