import React, { useContext, useState } from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import CartContext from "../storeContext/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
    const location = useLocation();
  const cartCtx = useContext(CartContext);

  let cartCount = 0;

  cartCtx.items.forEach((element) => {
    cartCount += Number(element.quantity);
  });

  const cartClickHandler = (event) => {
    event.preventDefault();
    props.cartHandler();
  };

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
        </Nav>
        {isStoreVisible && (<Button variant="outline-warning" onClick={cartClickHandler}>
          Cart {cartCount}
        </Button>)}
      </Container>
    </Navbar>
  );
};

export default Header;
