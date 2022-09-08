import React from 'react';
import ReactDOM from 'react-dom/client';


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'jquery/dist/jquery.min.js'


import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  
    <App />
    

  </BrowserRouter>,
  // document.getElementById('root')
)


