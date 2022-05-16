import React, { useEffect, useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/logo.svg"
import { useLocation } from 'react-router-dom';
import { t } from "i18next";


const MyNavbar = () => {
    const location = useLocation();
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)
    useEffect(() => {
        localStorage.getItem("signedIn") ? setIsUserSignedIn(true) : setIsUserSignedIn(false);
    }, [location]);

    return (
        <Navbar collapseOnSelect expand="md" variant="dark" className="my-navbar px-3">
            <Link className="primary-color text-decoration-none" to="/">
                <span className="navbar-brand d-flex flex-row align-items-center">
                    <img src={logo} className="App-logo-mini" alt="logo" />
                    <div className="logo-navbar-text primary-color d-flex flex-column">
                        <span>DIGITAL</span>
                        <span>WALLET</span>
                    </div>
                </span>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {!isUserSignedIn
                    ? <Nav className="ms-auto">
                        <Link className="text-decoration-none nav-link" to="login">{t("common.log_in")}</Link>
                    </Nav>
                    : <>
                        <Nav className="me-auto">
                            <Link className="text-decoration-none nav-link" to="wallet">{t("navbar.my_wallet")}</Link>
                            <Link className="text-decoration-none nav-link" to="add-funds">{t("navbar.add_funds")}</Link>
                            <Link className="text-decoration-none nav-link" to="transfer">{t("navbar.transfer")}</Link>
                        </Nav>
                        <Link className="text-decoration-none text-danger nav-link" to="/"
                            onClick={() => {
                                localStorage.removeItem("signedIn");
                                localStorage.removeItem("email");
                                localStorage.removeItem("name")
                            }
                            }>
                            {t("navbar.sign_off")}
                        </Link>
                    </>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;