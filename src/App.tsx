import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import React from "react";
import { TransactionProvider } from "./context/TransactionContext.js";
import Dashboard from "./pages/Dashboard.jsx";
import Transactions from "./pages/Transactions.js";
import Reports from "./pages/Reports.jsx";


function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} /> 
          <Route path="/reports" element={<Reports/>}/>
        </Routes>
      </BrowserRouter>
    </TransactionProvider>
  );
}

export default App;

