import React, { useState } from "react";

const Wallet = () => {

    return (
        <div className="container my-3">
            <h2 className="primary-color">{"Bienvenido ".concat(localStorage.getItem("name"))}</h2>
            <p className="h5 my-3">Tu saldo actual es de: <span className="primary-color">120 $</span></p>
            <p className="h5 my-3">Número de cuenta: <span className="primary-color">8888-8888</span></p>
            <div>
                <h3 className="mt-5 primary-color">Últimos movimientos</h3>
                <div className="div-wallet-history row">
                    <div className="col-8">
                    <p><span className="primary-color">Emisor: </span>Juan Jose, 8888-8888</p>
                    <p><span className="primary-color">Remitente: </span>Alberto Martinez, 9999-9999</p>
                    </div>
                    <div className="col-4">
                        <p className="h2 text-success">+90 $</p>
                        <p>Saldo: 1680 $</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Wallet;
