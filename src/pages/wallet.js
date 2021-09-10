import React from "react";
import { useSelector } from "react-redux";
//import { browserRouterRef } from "../App";
import MyNavbar from "../components/my-navbar";

const Wallet = () => {
    const userEmail = localStorage.getItem("email")
    const userData = useSelector(state => state.users.find(elem => elem.email === userEmail));
    if (!userData) {
        window.location.replace("/login");
        // browserRouterRef.current.history.replace("/login"); //TODO: **SI NO SE RENDERIZA NADA, NO HAY BROWSERROUTER
    }

    return (<>
        <MyNavbar />
        <div className="container my-3">
            <h2 className="primary-color">{"Bienvenido ".concat(localStorage.getItem("name"))}</h2>
            <p className="h5 my-3">
                Tu saldo actual es de:
                <span className="primary-color h3"> {userData.money.toString().concat(" $")}</span>
            </p>
            <div>
                <h3 className="mt-5 primary-color">Últimos movimientos</h3>
                <div className="div-last-transactions">
                    {(userData.transactions===[])
                        ?
                    "Todavía no hay movimientos :("
                        :
                    (userData.transactions.map((elem) => {
                        if (elem.type === "deposit") {
                            return (
                                <div key={elem.id} className="div-wallet-history row mx-3 my-2">
                                    <h3>Ingreso: <span className="h5 text-secondary">{elem.date}</span></h3>
                                    <div className="col-8">
                                        <p>
                                            <span className="primary-color">Beneficiario: </span>
                                            {elem.beneficiaryName.concat(", ", elem.beneficiaryEmail)}
                                        </p>
                                    </div>
                                    <div className="col-4">
                                        <p className="h2 text-primary">
                                            {"+".concat(elem.amount, " $")}
                                        </p>
                                        <p>{"Saldo: ".concat(elem.balance, " $")}</p>
                                    </div>
                                </div>
                            );
                        }
                        if (elem.type === "transference") {
                            return (
                                <div key={elem.id} className="div-wallet-history row m-3">
                                    <h3>Transferencia: <span className="h5 text-secondary">{elem.date}</span></h3>
                                    <div className="col-8">
                                        <p>
                                            <span className="primary-color">Emisor: </span>
                                            {elem.senderName.concat(", ", elem.senderEmail)}
                                        </p>
                                        <p>
                                            <span className="primary-color">Receptor: </span>
                                            {elem.receptorName.concat(", ", elem.receptorEmail)}
                                        </p>
                                    </div>
                                    <div className="col-4">
                                        <p className={"h2 ".concat(((elem.amount > 0) ? "text-primary" : "text-danger"))}>
                                            {((elem.amount < 0) ? elem.amount.toString() : "+".concat(elem.amount.toString())).concat(" $")}
                                        </p>
                                        <p>{"Saldo: ".concat(elem.balance, " $")}</p>
                                    </div>
                                </div>
                            );
                        }
                    }))}
                </div>
            </div >
        </div>
    </>);
};

export default Wallet;
