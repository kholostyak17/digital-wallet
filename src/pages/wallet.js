import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Wallet = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="container">
            <h2>{"Bienvenido ".concat(localStorage.getItem("name"))}</h2>
            <p>Tu saldo actual es de: 90€</p>
            <div>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Nueva transferencia
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text" className="div-transfer">
                        <h2>Realizar nueva transferencia:</h2>
                        <label htmlFor="amount" class="form-label">Cantidad:</label>
                        <input type="number" name="amount" class="form-control" id="amount" />
                        <label htmlFor="identity" class="form-label">Número de cuenta</label>
                        <input type="text" name="identity" class="form-control" id="amount" />
                    </div>
                </Collapse>
            </div >
        </div>
    );
};

export default Wallet;
