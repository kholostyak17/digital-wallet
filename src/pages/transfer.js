import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { makeTransferAction } from "../redux/actions";
import { browserRouterRef } from "../App";

const Transfer = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const mailLogedUser = localStorage.getItem("email");
    const avaibleMoney = parseInt(users.find(elem => elem.email === mailLogedUser).money);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let alertMessage = "Error:\n";
        if (data.amount === "") {
            alertMessage = alertMessage + ("- Debes elegir una cantidad de dinero.\n");
        }
        if (data.email === "") {
            alertMessage = alertMessage + ("- Debes seleccionar un destinatario.\n");
        }
        if (data.amount > users.find(elem => elem.email === mailLogedUser).money) {
            alertMessage = alertMessage + ("- No dispones de tanto dinero. Tu saldo es: ".concat(avaibleMoney, " $.\n"));
        }
        if (data.email === localStorage.getItem("email")) {
            alertMessage = alertMessage + ("- No puedes realizar transacciones a tu propia cuenta.\n");
        }
        if (alertMessage!=="Error:\n") {
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
                <h2 className="primary-color">Realizar nueva transferencia</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="amount" className="form-label mt-3">Cantidad:</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text">$</span>
                            <input {...register("amount")} type="number" name="amount" className="form-control" id="amount" min="1" />
                        </div>
                        <div>
                            <label htmlFor="email" className="form-label mt-3">Email del destinatario</label>
                            <select {...register("email")} name="email" className="form-control" id="email" >
                                <option value="" placeholder=""></option>
                                {users.map((elem) => {
                                    return (
                                        <option value={elem.email} key={elem.email}>{elem.email}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="Enviar dinero" className="button-green m-4" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Transfer;
