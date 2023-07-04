import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Components/Home/Home";
import Footer from "./Footer";
import Header from "./Header";

const RootLayout = (props) => {
  return (
    <>
      <Header cartHandler={props.cartHandler} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
