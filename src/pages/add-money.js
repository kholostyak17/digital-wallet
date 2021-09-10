import React from "react";
import { useForm } from "react-hook-form";
import { browserRouterRef } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { addMoneyAction } from "../redux/actions";
import MyNavbar from "../components/my-navbar";

const AddMoney = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        dispatch(addMoneyAction({email: localStorage.getItem("email"), amount: data.amount}));
        browserRouterRef.current.history.replace("/wallet");
        alert("Depósito realizado con éxito");
    }

    // const add_money = (email, amount) => {
    //     let account = store.users.find(elem => elem.email === email);
    //     let position = store.users.indexOf(account);
    //     const idTransaction = getNewID();           //devuelve un ID, e incrementa el valor para el siguiente
    //     const dateTransaction = getNewDate();       //devuelve fecha
    //     const new_deposit = {
    //         type: "transference",
    //         id_transaction: idTransaction,
    //         beneficiaryEmail: email,
    //         beneficiaryName: account.name,
    //         amount: amount,
    //         balance: account.money + amount,
    //         date: dateTransaction,
    //     };
    //     store.users[position].money = account.money + amount;
    // };

    // const make_transfer = (senderEmail, receptorEmail, amount) => {
    //     let senderAccount = store.users.find(elem => elem.email === senderEmail);
    //     const senderPosition = store.users.indexOf(senderAccount);
    //     let receptorAccount = store.users.find(elem => elem.email === receptorEmail);
    //     const receptorPosition = store.users.indexOf(receptorAccount);
    //     const idTransaction = getNewID();           //devuelve un ID, e incrementa el valor para el siguiente
    //     const dateTransaction = getNewDate();       //devuelve fecha
    //     const new_transference_sender = {
    //         type: "transference",
    //         id_transaction: idTransaction,
    //         senderEmail: senderEmail,
    //         senderName: senderAccount.name,
    //         receptorEmail: receptorEmail,
    //         receptorName: receptorAccount.name,
    //         amount: -amount,
    //         balance: senderAccount.money - amount,
    //         date: dateTransaction,
    //     };
    //     const new_transference_receptor = {
    //         type: "transference",
    //         id_transaction: idTransaction,
    //         senderEmail: senderEmail,
    //         senderName: senderAccount.name,
    //         receptorEmail: receptorEmail,
    //         receptorName: receptorAccount.name,
    //         amount: amount,
    //         balance: receptorAccount.money + amount,
    //         date: dateTransaction,
    //     };
    //     store.users[senderPosition].transactions.push(new_transference_sender);
    //     store.users[senderPosition].money = senderAccount - amount;
    //     store.users[receptorPosition].transactions.push(new_transference_receptor);
    //     store.users[receptorPosition].money = receptorAccount + amount;
    // };

    // const getNewDate = () => {
    //     const d = new Date();
    //     return (d.getDate().toString().concat("-", d.getMonth().toString(), "-", d.getFullYear().toString(),
    //         " ", d.getHours().toString(), "-", d.getMinutes().toString()));
    // };

    // const getNewID = () => {
    //     const id = store.id;
    //     store.id++;
    //     return (id);
    // };

    return (<>
        <MyNavbar />
        <div className="container my-3">
            <div className="col-12 col-md-5">
                <h2 className="primary-color">Añadir dinero a la cuenta</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="amount" className="form-label mt-3">Cantidad:</label>
                            <input {...register("amount")} type="number" name="amount" className="form-control" id="amount" min="1" />
                            <div className="row">
                                <div className="col">
                                    <label className="form-label mt-3">Número de tarjeta:</label>
                                    <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label mt-3">Fecha de v.:</label>
                                    <input type="text" className="form-control" placeholder="XX / XXXX" disabled />
                                </div>
                                <div className="col-6">
                                    <label className="form-label mt-3">CVC:</label>
                                    <input type="text" className="form-control" placeholder="XXX" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="Pagar" className="button-green mt-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    </>);
};

export default AddMoney;