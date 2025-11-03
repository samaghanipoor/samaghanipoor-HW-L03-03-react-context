import React, { createContext, useContext, useState, useEffect } from "react";


const TransactionContext = createContext();


export const useTransactions = () => useContext(TransactionContext);


export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {

    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);


  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };


  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
