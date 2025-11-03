import React, { useState } from "react";
import { useTransactions } from "../context/TransactionContext.jsx";
import { Button, Container, List, ListItem, TextField, Typography } from "@mui/material";

const Transactions = () => {
  const { transactions, addTransaction } = useTransactions();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction({ id: Date.now(), title, amount });
    setTitle("");
    setAmount("");
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3, color: "#616161" }}>
        Transactions
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#9e9e9e",
            "&:hover": { backgroundColor: "#7e7e7e" },
          }}
        >
          Add Transaction
        </Button>
      </form>

      <List>
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              mb: 1,
              color: "#424242",
            }}
          >
            {transaction.title} — ${transaction.amount}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Transactions;

