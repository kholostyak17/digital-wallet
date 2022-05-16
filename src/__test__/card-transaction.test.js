import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardTransaction from "../components/card-transaction";


const renderComponent=()=>{
    return render(<CardTransaction
    variant="transference"
    date="29-02-2010 12:34"
    senderName="Remitente"
    senderEmail="mail del remitente"
    receptorName="Destinatario "
    receptorEmail="mail del destinatario"
    amount="230"
    balance="10240"
/>);
};

test("renders content", () => {
    console.log(renderComponent);
});

test("words appears", () => {
    const component = renderComponent();
    component.getByText("Transferencia");
    component.getByText("Saldo:");
    component.getByText("Emisor:");
    component.getByText("Receptor:");
    component.getByText("29-02-2010 12:34");
    component.getByText("10240 $");
    component.debug();
    
    
})