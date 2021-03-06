import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";  //bootstrap imported
import { Provider } from "react-redux"
import { store } from "./redux/store"
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
