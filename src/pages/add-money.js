import React from "react";
import { useForm } from "react-hook-form";

const AddMoney = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <div className="container my-3">
            <div className="col-12 col-md-5">
                <h2 className="primary-color">Añadir dinero a la cuenta</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="amount" className="form-label mt-3">Cantidad:</label>
                            <input {...register("amount")} type="number" name="amount" className="form-control" id="amount" min="0"/>
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
    );
};

export default AddMoney;