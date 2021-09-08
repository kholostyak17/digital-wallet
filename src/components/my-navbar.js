import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="my-navbar px-3">
                <Navbar.Brand href="">Digital Wallet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="profile">Mi perfil</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="login">Iniciar sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;