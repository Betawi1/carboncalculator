import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Estimate from "./Components/Emissions/Estimate";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/">
      <App />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
