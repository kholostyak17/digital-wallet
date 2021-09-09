import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Transfer = () => {
    const [selectMail, setSelectMail] = useState(false); //dependiendo de su valor cambiará el tipo de input del destinatario
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <div className="container my-3">
            <div className="col-12 col-md-5">
            <h2 className="primary-color">Realizar nueva transferencia</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="amount" className="form-label mt-3">Cantidad:</label>
                    <input {...register("amount")} type="number" name="amount" className="form-control" id="amount" min="0"/>
                    <div className={selectMail?"hidden-box":""}>
                        <label htmlFor="identity" className="form-label mt-3">Número de cuenta</label>
                        <input {...register("identity")} type="text" name="identity" className="form-control" id="identity" value={selectMail?null:console.log("")} disabled={selectMail?true:false}/>
                    </div>
                    <div className={selectMail?"":"hidden-box"}>
                        <label htmlFor="email" className="form-label mt-3">Email del destinatario</label>
                        <select {...register("email")} name="email" className="form-control" id="email" disabled={selectMail?false:true}>
                            <option value="">default@email.com</option>
                        </select>
                    </div>
                    <p className="mt-3">
                        <span>¿Seleccionar destinatario por email? </span>
                        <input type="checkbox" name="selectMail" id="selectMail" onClick={()=>setSelectMail(!selectMail)}/>
                    </p>
                    <div className="text-center">
                    <input type="submit" value="Enviar dinero" className="button-green" />
                    </div>
                    

                </form>
            </div>
            </div>
        </div>
    );
};

export default Transfer;
