import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { makeTransferAction } from "../redux/actions";
import { browserRouterRef } from "../router";
import { t } from "i18next";

const Transfer = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const mailLogedUser = localStorage.getItem("email");
    const availableMoney = parseInt(users.find(elem => elem.email === mailLogedUser).money);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let alertMessage = "Error:\n";
        if (data.amount === "") {
            alertMessage = alertMessage + t("alerts.reason_null_amount");
        }
        if (data.email === "") {
            alertMessage = alertMessage + t("alerts.reason_null_receiver");
        }
        if (data.amount > users.find(elem => elem.email === mailLogedUser).money) {
            alertMessage = alertMessage + t("alerts.reason_insuficent_funds", {availableMoney});
        }
        if (data.email === localStorage.getItem("email")) {
            alertMessage = alertMessage + t("alerts.reason_same_receiver");
        }
        if (alertMessage !== "Error:\n") {
            alert(alertMessage);
        }
        if (
            (data.amount !== "" && data.email !== "") &&
            (data.amount < users.find(elem => elem.email === mailLogedUser).money) &&
            (data.email !== localStorage.getItem("email"))
        ) {
            dispatch(makeTransferAction(
                {
                    senderEmail: localStorage.getItem("email"),
                    receptorEmail: data.email,
                    amount: data.amount
                }
            ));
            browserRouterRef.current.history.replace("/wallet");
            alert("Transferencia realizada con éxito");
        }
    }

    return (
        <div className="container my-3">
            <div className="col-12 col-md-5">
                <h2 className="primary-color fw-bold">{t("transfer.new_transfer")}</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-4">
                            <label htmlFor="amount" className="form-label">{t("common.amount")}</label>
                            <div className="input-group">
                                <span className="input-group-text">$</span>
                                <input {...register("amount")} type="number" name="amount" className="form-control" id="amount" min="1" />
                            </div>
                        </div>
                        <div className="my-4">
                            <label htmlFor="email" className="form-label">{t("transfer.receiver")}</label>
                            <select {...register("email")} name="email" className="form-control" id="email" >
                                <option value="" placeholder=""></option>
                                {users.map((elem) => {
                                    return (
                                        <option value={elem.email} key={elem.email}>{elem.email}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="text-center py-3">
                            <input type="submit" value={t("common.submit")} className="button-green" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Transfer;
