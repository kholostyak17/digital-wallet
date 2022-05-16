import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./styles/index.css";

import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Transfer from "./pages/transfer";
import AddFunds from "./pages/add-funds";
import Login from "./pages/login";
import Register from "./pages/register";
import MyNavbar from "./components/my-navbar";
import MyFooter from "./components/my-footer";

export const browserRouterRef = React.createRef();

const PrivateRoute = (props) => {
  return localStorage.getItem("signedIn") ? props.children : <Redirect to="/login" /> ;
};
const UnloggedRoute = (props) => {
  return !localStorage.getItem("signedIn") ? props.children : <Redirect to="/wallet" /> ;
};

function Router() {
  return (
    <div className="div-app">
      <BrowserRouter ref={browserRouterRef}>
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/wallet">
            <Wallet />
          </PrivateRoute>
          <PrivateRoute exact path="/transfer">
            <Transfer />
          </PrivateRoute>
          <PrivateRoute exact path="/add-funds">
            <AddFunds />
          </PrivateRoute>
          <UnloggedRoute exact path="/login">
            <Login />
          </UnloggedRoute>
          <UnloggedRoute exact path="/register">
            <Register />
          </UnloggedRoute>
          <Route>
            <h1>Código 404: Ruta no encontrada :(</h1>
          </Route>
        </Switch>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default Router;
