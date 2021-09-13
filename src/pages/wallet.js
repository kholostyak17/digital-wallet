import React from "react";
import { useSelector } from "react-redux";
import CardDeposit from "../components/card-deposit";
import CardTransference from "../components/card-transference";
import MyNavbar from "../components/my-navbar";

const Wallet = () => {
    const userEmail = localStorage.getItem("email")
    const userData = useSelector(state => state.users.find(elem => elem.email === userEmail));

    if (!userData) {
        window.location.replace("/login");
    }

    return (<>
        <MyNavbar />
        <div className="container my-3">
            <h2 className="primary-color">
                {"Bienvenido ".concat(localStorage.getItem("name"))}
            </h2>
            <p className="h5 my-3">
                Tu saldo actual es de:
                <span className="primary-color h3"> {userData.money.toString().concat(" $")}</span>
            </p>
            <div>
                <h3 className="mt-5 primary-color">Últimos movimientos</h3>
                <div className="div-last-transactions">
                    {(userData.transactions === [])
                        ?
                        "Todavía no hay movimientos :("
                        :
                        (userData.transactions.map((elem, index) => {
                            if (elem.type === "deposit") {
                                return <CardDeposit
                                    key={index}
                                    date={elem.date}
                                    beneficiaryName={elem.beneficiaryName}
                                    beneficiaryEmail={elem.beneficiaryEmail}
                                    amount={elem.amount}
                                    balance={elem.balance}
                                />
                            }
                            if (elem.type === "transference") {
                                return <CardTransference
                                    key={index}
                                    date={elem.date}
                                    senderName={elem.senderName}
                                    senderEmail={elem.senderEmail}
                                    receptorName={elem.receptorName}
                                    receptorEmail={elem.receptorEmail}
                                    amount={elem.amount}
                                    balance={elem.balance}
                                />
                            }
                            return <></>
                        }))}
                </div>
            </div >
        </div>
    </>);
};

export default Wallet;
