import  ReactDOM  from "react-dom";
import React from "react";
import App from './App'
// import Header1 from "./Header2/HeaderMain";
import { BrowserRouter } from "react-router-dom";
// import Home from "./Home/Home";
ReactDOM.render(
    <>
    
    <BrowserRouter>
    <div>
    <App></App>
    </div>
    </BrowserRouter>
    
    </>

,document.getElementById("root"));
