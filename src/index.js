import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Add from './pagecontacto';
import Pageedit from './pageedit';
import Pageinfocontacto from './pagesinfocontacto'
import PagesAddContacto from './pagesaddcontacto'
import PagesEditarContac from './pageseditarcontac'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="bg-zinc-800 h-screen">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Ingresar" element={<Add />} />
        <Route path="/EditarContacto/:id_data" element={<Pageedit />} />
        <Route path="/InformacionContacto/:id_data" element={<Pageinfocontacto />} />
        <Route path="/Ingresarcontacto" element={<PagesAddContacto />} />
        <Route path="/EditartInformacion/:id_contacto" element={<PagesEditarContac />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
