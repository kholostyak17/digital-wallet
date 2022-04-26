import React from "react";
import PropTypes from 'prop-types';

const CardDeposit = props => {
    return (
        <div className="div-wallet-history row m-3">
            <h3>Depósito <span className="h5 text-secondary">{props.date}</span></h3>
            <div className="col-8">
                <p>
                    <span className="primary-color">Beneficiario: </span>
                    {props.beneficiaryName.concat(", ", props.beneficiaryEmail)}
                </p>
            </div>
            <div className="col-4">
                <p className={"h2 ".concat(((props.amount > 0) ? "text-primary" : "text-danger"))}>
                    {((props.amount < 0)
                        ? props.amount.toString()
                        : "+".concat(props.amount.toString()))
                      .concat(" $")
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

export default CardDeposit;

CardDeposit.propsTypes = {
    beneficiaryName: PropTypes.string,
    beneficiaryEmail: PropTypes.string,
    amount: PropTypes.number,
    balance: PropTypes.number
};