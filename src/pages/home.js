import React from "react";
import { browserRouterRef } from "../App";
import logo from "../logo.svg"

const Home = () => {

    return (
        <div className="container my-3 text-center">
            <h1 className="primary-color">DIGITAL WALLET</h1>
            <div className="text-center p-5">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            {!localStorage.getItem("signedIn")
                ?
                (<div>
                    <button className="button-green m-3" onClick={() => browserRouterRef.current.history.replace("/register")}>
                        Regístrate
                    </button>
                    <button className="button-green m-3" onClick={() => browserRouterRef.current.history.replace("/login")}>
                        Accede
                    </button>
                </div>)
                :
                (<div>
                    <button className="button-green m-3" onClick={() => browserRouterRef.current.history.replace("/wallet")}>
                        Ir a mi cartera
                    </button>
                </div>)
            }
        </div>
    );
};

export default Home;