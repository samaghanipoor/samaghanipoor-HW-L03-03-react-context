import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import React from "react";
import { TransactionProvider } from "./context/TransactionContext.jsx";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
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

