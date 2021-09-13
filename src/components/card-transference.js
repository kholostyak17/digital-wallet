import React from "react";
import PropTypes from 'prop-types';

const CardTransference = props => {
    return (
        <div className="div-wallet-history row m-3">
            <h3>Transferencia <span className="h5 text-secondary">{props.date}</span></h3>
            <div className="col-8">
                <p>
                    <span className="primary-color">Emisor: </span>
                    {props.senderName.concat(", ", props.senderEmail)}
                </p>
                <p>
                    <span className="primary-color">Receptor: </span>
                    {props.receptorName.concat(", ", props.receptorEmail)}
                </p>
            </div>
            <div className="col-4">
                <p className={"h2 ".concat(((props.amount > 0) ? "text-primary" : "text-danger"))}>
                    {((props.amount < 0)
                        ? props.amount.toString()
                        : "+".concat(props.amount.toString())
                      ).concat(" $")
                    }
                </p>
                <p>
                    <span>Saldo: </span>
                    {props.balance.toString().concat(" $")}
                </p>
            </div>
        </div>
    );
};

export default CardTransference;

CardTransference.propsTypes = {
    senderName: PropTypes.string,
    senderEmail: PropTypes.string,
    receptorName: PropTypes.string,
    receptorEmail: PropTypes.string,
    amount: PropTypes.number,
    balance: PropTypes.number
};