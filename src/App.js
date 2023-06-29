import React, { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Store from "./Components/Store/Store";
// import { Button } from "react-bootstrap";
import Header from "./Layouts/Header";
import classes from "./App.module.css";
import CartProvider from "./store/CartProvider";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/Root";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const visibleCartHandler = () => {
    if (cartVisible == false) {
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }
  };

  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout cartHandler={visibleCartHandler}/>,
      children: [
        { path: "/store", element: <Store /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    <CartProvider>
      <div className={classes.con}>
        <RouterProvider router={route} />
        {cartVisible && <Cart />}
      </div>
    </CartProvider>
  );
}

export default App;
