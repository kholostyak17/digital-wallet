import React from "react";
import { useSelector } from "react-redux";
import CardTransaction from "../components/card-transaction";
import { t } from "i18next";

    const Wallet = () => {
    const userEmail = localStorage.getItem("email")
    const userData = useSelector(state => state.users.find(elem => elem.email === userEmail));
    const transactions = userData.transactions.slice().reverse();

    if (!userData) {
        window.location.replace("/login");
    }

    return (
        <div className="container my-3">
            <h2 className="primary-color fw-bold">
                {`${t("wallet.welcome_message")} ${localStorage.getItem("name")}`}
            </h2>
            <p className="h5 my-4">
                {t("wallet.actual_balance")}
                <span className="primary-color h2 fw-bold"> {userData.money.toString().concat(" $")}</span>
            </p>
            <div>
                <h3 className="mt-5 primary-color">{t("wallet.last_movements")}</h3>  
                {(transactions.length === 0)
                    ? <div>{t("wallet.empty_historial")}</div>
                    : <div id="transactions-list" className="div-last-transactions">
                        {(transactions.map((elem, index) => {
                            if (elem.type === "deposit") {
                                return <CardTransaction
                                    key={index}
                                    variant="deposit"
                                    date={elem.date}
                                    beneficiaryName={elem.beneficiaryName}
                                    beneficiaryEmail={elem.beneficiaryEmail}
                                    amount={elem.amount}
                                    balance={elem.balance}
                                />
                            }
                            if (elem.type === "transference") {
                                return <CardTransaction
                                    key={index}
                                    variant="transference"
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
                }
            </div >
        </div>
    );
};

export default Wallet;
