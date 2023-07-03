import React, { Fragment, useContext, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Store from "./Components/Store/Store";
// import { Button } from "react-bootstrap";
import classes from "./App.module.css";
import CartProvider from "./storeContext/CartProvider";
import About from "./Components/About/About";
import {
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RootLayout from "./Layouts/Root";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/Contact/ContactUs";
import Product from "./Components/Store/Product";
import Login from "./Components/Login/Login";
import AuthContext from "./storeContext/auth-context";
import Header from "./Layouts/Header";

const productsArrs = [
  {
    title: "Colors",
    price: 100,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    ],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    ],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },
];

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const authCtx = useContext(AuthContext);

  const visibleCartHandler = () => {
    if (cartVisible == false) {
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }
  };

  // const route = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout cartHandler={visibleCartHandler} />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/store", element: <Store productsArr={productsArrs} /> },
  //       { path: "/about", element: <About /> },
  //       { path: "/contactus", element: <ContactUs /> },
  //       { path: "/login", element: <Login /> },
  //       {
  //         path: "/store/:productId",
  //         element: <Product productsArr={productsArrs} />,
  //       },
  //     ],
  //   },
  // ]);
  

  const clickHandler = () => {
    if (cartVisible == true) {
      setCartVisible(false);
    }
  };

  return (
    <CartProvider>
      <div className={classes.con} onClick={clickHandler}>
        <Routes>
          <Route path="/" element={<RootLayout cartHandler={visibleCartHandler} />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store productsArr={productsArrs} />} />
            <Route path="about" element={<About />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="store/:productId" element={<Product productsArr={productsArrs} /> }/>
          </Route>
        </Routes>
        {cartVisible && <Cart />}
      </div>
    </CartProvider>
  );
}

export default App;
