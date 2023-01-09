import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./app"
import "./app.css"

ReactDOM.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
      </Routes>
  </BrowserRouter>
, document.getElementById("root"));
