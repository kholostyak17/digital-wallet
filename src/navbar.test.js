import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import MyNavbar from "./components/my-navbar";


localStorage.setItem("signedIn", true)

test("renders content", () => {
    console.log(render(<MyNavbar />));
});

test("words appears", () => {
    const component = render(<MyNavbar />)
    component.getByText("Cerrar sesión");
    component.getByText("Añadir dinero");
    component.getByText("Mi cartera");
    component.getByText("Transferir");
    if (!localStorage.getItem("signedIn"))
        component.getByText("Iniciar sesión");
})