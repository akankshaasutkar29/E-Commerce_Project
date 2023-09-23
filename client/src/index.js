import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from "../src/context/auth"
import {SearchProvider} from "../src/context/search"
import {CartProvider} from "../src/context/cart"
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
        <App />
       </BrowserRouter>
      </CartProvider>
     </SearchProvider>
  </AuthProvider>
 
 
);


reportWebVitals();
