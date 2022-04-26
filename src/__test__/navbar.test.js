import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import MyNavbar from "../components/my-navbar";
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "localhost:3000/example/path"
    })
}));

localStorage.setItem("signedIn", true);

const NavbarComponent = () => (
    <Router>
        <MyNavbar />
    </Router>
);

test("renders content", () => {
    render(<NavbarComponent />);
});

test("words appears", () => {
    const component = render(<NavbarComponent />)
    component.getByText("Cerrar sesión");
    component.getByText("Añadir dinero");
    component.getByText("Mi cartera");
    component.getByText("Transferir");
    if (!localStorage.getItem("signedIn"))
        component.getByText("Iniciar sesión");
})