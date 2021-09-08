import React, { useState } from "react";

const Transfer = () => {
    const [selectMail, setSelectMail] = useState(false);
    return (
        <div className="container my-3">
            <div className="col-12 col-md-5">
            <h2 className="primary-color">Realizar nueva transferencia</h2>
            <div>
                <form action="">
                    <label htmlFor="amount" class="form-label mt-3">Cantidad:</label>
                    <input type="number" name="amount" class="form-control" id="amount" />
                    <div className={selectMail?"hidden-box":""}>
                        <label htmlFor="identity" class="form-label mt-3">Número de cuenta</label>
                        <input type="text" name="identity" class="form-control" id="amount" disabled={selectMail?true:false}/>
                    </div>
                    <div className={selectMail?"":"hidden-box"}>
                        <label htmlFor="email" class="form-label mt-3">Email del destinatario</label>
                        <select name="email" class="form-control" id="email" disabled={selectMail?false:true}>
                            <option value="">wwwwwwwwwwwwwwwwww</option>
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
