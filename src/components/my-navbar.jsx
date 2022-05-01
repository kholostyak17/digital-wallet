import React, { useEffect, useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import logo from "../logo.svg"
import { useLocation } from 'react-router-dom';


const MyNavbar = () => {
    const location = useLocation();
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)
    useEffect(() => {
        localStorage.getItem("signedIn") ? setIsUserSignedIn(true) : setIsUserSignedIn(false);
    }, [location]);

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="my-navbar px-3">
            <Link className="primary-color text-decoration-none" to="/">
                <span className="navbar-brand">
                    <img src={logo} className="App-logo-mini" alt="logo" />
                    <span className="primary-color">Digital Wallet</span>
                </span>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {!isUserSignedIn
                    ? <Nav className="ms-auto">
                        <Link className="text-decoration-none nav-link" to="login">Iniciar sesión</Link>
                    </Nav>
                    : <>
                        <Nav className="me-auto">
                            <Link className="text-decoration-none nav-link" to="wallet">Mi cartera</Link>
                            <Link className="text-decoration-none nav-link" to="add-money">Añadir dinero</Link>
                            <Link className="text-decoration-none nav-link" to="transfer">Transferir</Link>
                        </Nav>
                        <Link className="text-decoration-none text-danger nav-link" to="/"
                            onClick={() => {
                                localStorage.removeItem("signedIn");
                                localStorage.removeItem("email");
                                localStorage.removeItem("name")
                            }
                            }>
                            Cerrar sesión
                        </Link>
                    </>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;