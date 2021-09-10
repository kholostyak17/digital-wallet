import React, { createRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import { useSelector } from 'react-redux';
import './App.css';

import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Transfer from "./pages/transfer";
import AddMoney from "./pages/add-money";
import Login from "./pages/login";
import Register from "./pages/register";

export const browserRouterRef = React.createRef();

function App() {
	return (
		<div className="div-app">
			<BrowserRouter ref={browserRouterRef}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/wallet">
						<Wallet />
					</Route>
					<Route exact path="/transfer">
						<Transfer />
					</Route>
					<Route exact path="/add-money">
						<AddMoney />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
