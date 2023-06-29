import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CartItems from "./CartItems";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartContext from "../../storeContext/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [showCartItem, setShowCartItem] = useState(false);

  useEffect(() => {
    if (cartCtx.items.length > 0) {
      setShowCartItem(true);
    } else {
      setShowCartItem(false);
    }
  }, [cartCtx.items.length]);
  return (
    <Modal>
      <div className={classes.header}>
        <h3>Cart Items</h3>
        {!showCartItem && <div className={classes.cartempty}>Your Cart is Empty!</div>}
        {showCartItem && <div className={classes.cartlist}>
          <CartItems />
        </div>}
      </div>
    </Modal>
  );
};

export default Cart;
