import React from "react";
import { useForm } from "react-hook-form";
import { browserRouterRef } from "../router";
import { useDispatch } from "react-redux";
import { AddFundsAction } from "../redux/actions";
import { t } from "i18next";

const AddFunds = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if (data.amount !== "") {
            dispatch(AddFundsAction({ email: localStorage.getItem("email"), amount: data.amount }));
            browserRouterRef.current.history.replace("/wallet");
            alert(t("alerts.add_funds_success"));
        }
        if (data.amount === "") {
            alert(t("alerts.error_null_amount"));
        }
    }

    return (
        <div className="container my-3">
            <div className="col-12 col-md-5">
                <h2 className="primary-color fw-bold">{t("add_funds.add_funds")}</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="my-4">
                                <label htmlFor="amount" className="form-label">{t("add_funds.amount")}</label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input {...register("amount")} type="number" name="amount" className="form-control" id="amount" min="1" max="100000000" />
                                </div>
                            </div>
                            <div className="my-4">
                                <label className="form-label">{t("add_funds.card_number")}</label>
                                <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" disabled />
                            </div>
                            <div className="my-4 row">
                                <div className="col-6">
                                    <label className="form-label">{t("add_funds.expiration_date")}</label>
                                    <input type="text" className="form-control" placeholder="XX / XXXX" disabled />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">{t("add_funds.cvv")}</label>
                                    <input type="text" className="form-control" placeholder="XXX" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="text-center py-3">
                            <input type="submit" value={t("add_funds.pay")} className="button-green" />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddFunds;