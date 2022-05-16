import React from "react";
import { browserRouterRef } from "../router";
import logo from "../assets/logo.svg"
import { t } from "i18next";

const Home = () => {

    return (
        <div className="container my-3 text-center">
            <h1 className="primary-color fw-bold">DIGITAL WALLET</h1>
            <div className="text-center p-5">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            {!localStorage.getItem("signedIn")
                ?
                (<div>
                    <button className="button-green m-3" onClick={() => browserRouterRef.current.history.replace("/register")}>
                        {t("common.register")}
                    </button>
                    <button className="button-green m-3" onClick={() => browserRouterRef.current.history.replace("/login")}>
                    {t("common.log_in")}
                    </button>
                </div>)
                :
                (<div>
                    <button className="button-green m-3" onClick={() => browserRouterRef.current.history.replace("/wallet")}>
                       {t("home.go_to_wallet")}
                    </button>
                </div>)
            }
        </div>
    );
};

export default Home;