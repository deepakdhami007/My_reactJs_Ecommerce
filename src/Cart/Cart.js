import React from "react";
import { Button } from "react-bootstrap";
import CartItems from "./CartItems";
import Modal from "./Modal";



const Cart = (props) => {
  return (
    <Modal>
      <CartItems />
    </Modal>
  );
};

export default Cart;
