import React from "react";
import { Button } from "react-bootstrap";

import classes from "./CartItems.module.css";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const CartItems = (props) => {
  return (
    <ul className={classes.cartItems}>
    <h3>Cart Items</h3>
      <div className={classes.heading}>
        <span>ITEM</span>
        <span>Price</span>
        <span>Quantity</span>
      </div>
      {cartElements.map((ele) => (
        <li className={classes.list}>
          <div>
            <img src={ele.imageUrl} />
            <span>{ele.title}</span>
          </div>
          <span>{ele.price}</span>
          <form>
            <input type="number" />
            <button>Remove</button>
          </form>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
