import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import classes from './Header.module.css'

const Header = ()=> {
    return (
        <Navbar bg="dark" expand="sm" variant="dark" >
            <Container>
                <Navbar.Brand href="/" className={classes.brand}>The Genrics</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Store</Nav.Link>
                    <Nav.Link href="/">About</Nav.Link>
                </Nav>
                <Button variant="outline-warning">Cart {0}</Button>{' '}
            </Container>
        </Navbar>
    )
};

export default Header;