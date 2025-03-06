import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Home from "./pages/Home";
import UpdateInvoicpro from './pages/UpdateInvoicpro';
import CreateInvoicpro from './pages/CreateInvoicpro';

 function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/create-Invoicpro" element={<CreateInvoicpro />} />
          <Route path="/edit-Invoicpro/:id" element={<UpdateInvoicpro />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;