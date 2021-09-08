import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/my-navbar";
import Wallet from "./pages/wallet";

function App() {
  return (
    <div className="main-div">
      <BrowserRouter>
        <MyNavbar/>
				<Switch>
					<Route exact path="/profile">
						<Wallet />
					</Route>
          <Route exact path="/login">
						{/* <Login /> */}
					</Route>
          <Route exact path="/register">
						{/* <Register /> */}
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
