import React from "react";
import PropTypes from 'prop-types';
import { t } from "i18next";

const CardTransaction = props => {
    return (
        <div className="div-wallet-history row m-3">
            <h3>
                {props.variant === "deposit" ? t("card_transaction.deposit") : t("card_transaction.transference") }
                {" "}  
                <span className="h5 text-secondary">
                    {props.date}
                </span>
            </h3>
            <div className="col-8">
                { props.variant === "deposit" 
                //variant deposit
                  ? <p>
                        <span className="primary-color">{t("card_transaction.beneficiary")}: </span>
                        {props.beneficiaryName.concat(", ", props.beneficiaryEmail)}
                    </p>
                //variant transference
                  : <> 
                        <p>
                        <span className="primary-color">{t("card_transaction.issuer")}: </span>
                        {props.senderName.concat(", ", props.senderEmail)}
                        </p>
                        <p>
                        <span className="primary-color">{t("card_transaction.receiver")}: </span>
                        {props.receptorName.concat(", ", props.receptorEmail)}
                        </p>
                    </>
                }
            </div>
            <div className="col-4">
                <p className={"h2 fw-bold ".concat(((props.amount > 0) ? "text-primary" : "text-danger"))}>
                    {((props.amount < 0)
                        ? props.amount.toString()
                        : "+".concat(props.amount.toString())
                      ).concat(" $")
                    }
                </p>
                <p>
                    <span>{t("card_transaction.balance")}: </span>
                    {props.balance.toString().concat(" $")}
                </p>
            </div>
        </div>
    );
};

export default CardTransaction;

CardTransaction.propsTypes = {
    beneficiaryName: PropTypes.string,
    beneficiaryEmail: PropTypes.string,
    variant: PropTypes.string,
    senderName: PropTypes.string,
    senderEmail: PropTypes.string,
    receptorName: PropTypes.string,
    receptorEmail: PropTypes.string,
    date: PropTypes.string,
    amount: PropTypes.number,
    balance: PropTypes.number
};