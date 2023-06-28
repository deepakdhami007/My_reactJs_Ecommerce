import React, { Fragment, useState } from "react";
import Cart from "./Cart/Cart";
import Store from "./Components/Store";
// import { Button } from "react-bootstrap";
import Header from "./Layouts/Header";
import classes from "./App.module.css";
import CartProvider from "./store/CartProvider";

function App() {
  const [storeVisible, setStoreVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  const visibleStoreHandler = () => {
    setStoreVisible(true);
  };

  const visibleCartHandler = () => {
    if (cartVisible == false) {
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }
  };

  return (
    <CartProvider>
      <div className={classes.con}>
        <Header
          onClickStore={visibleStoreHandler}
          onClickCart={visibleCartHandler}
        />
        {storeVisible && <Store />}
        {cartVisible && <Cart />}
      </div>
    </CartProvider>
  );
}

export default App;
