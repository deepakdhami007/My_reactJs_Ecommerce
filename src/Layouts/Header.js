import React, { useContext, useState } from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../storeContext/auth-context";
import CartContext from "../storeContext/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
    const location = useLocation();
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  let cartCount = 0;

  cartCtx.items.forEach((element) => {
    cartCount += Number(element.quantity);
  });

  const cartClickHandler = (event) => {
    event.preventDefault();
    props.cartHandler();
  };

  const logoutClickHandler = () => {
    authCtx.logout();
  }

  const isStoreVisible = location.pathname === "/store";
  return (
    <Navbar className={classes.nav} bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="/" className={classes.brand}>
          The Genrics
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/store">Store</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contactus">Contact us</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
        {isStoreVisible && (<Button variant="outline-warning" onClick={cartClickHandler} className={classes.cartbtn}>
          Cart {cartCount}
        </Button>)}
        {authCtx.isLoggedIn && <Button variant="danger" onClick={logoutClickHandler}>Logout</Button>}
      </Container>
    </Navbar>
  );
};

export default Header;
