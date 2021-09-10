import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../logo.svg"

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="my-navbar px-3">

            <Navbar.Brand href="/">
                <span className="primary-color">
                    <img src={logo} className="App-logo-mini" alt="logo" />
                    Digital Wallet
                    </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {
                    !localStorage.getItem("signedIn")
                        ?
                        (<Nav className="ms-auto">
                            <Nav.Link href="login">Iniciar sesión</Nav.Link>
                        </Nav>)
                        :
                        (<>
                            <Nav className="me-auto">
                                <Nav.Link href="wallet">Mi cartera</Nav.Link>
                                <Nav.Link href="add-money">Añadir dinero</Nav.Link>
                                <Nav.Link href="transfer">Transferir</Nav.Link>
                            </Nav>
                            <Nav.Link href="#">
                                <span
                                    onClick={() => {
                                        localStorage.removeItem("signedIn");
                                        localStorage.removeItem("email");
                                        localStorage.removeItem("name")
                                        window.location.replace("/");
                                    }}
                                    className="text-danger" >
                                    Cerrar sesión
                                </span>
                            </Nav.Link>
                        </>)
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;