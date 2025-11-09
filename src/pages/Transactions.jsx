import React, { useState } from "react";
import { useTransactions } from "../context/TransactionContext.jsx";
import {
  Button,
  Container,
  List,
  ListItem,
  TextField,
  Typography,
  IconButton,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Transactions = () => {
  const { transactions, addTransaction, deleteTransaction } = useTransactions();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Income");
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString(),
    });
    setTitle("");
    setAmount("");
  };

  // ✅ فیلتر و جستجو
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.amount.toString().includes(search);
    const matchesCategory =
      filterCategory === "All" || t.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3, color: "#616161" }}>
        Transactions
      </Typography>

      {/* 🟢 فرم افزودن تراکنش */}
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
        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Expense">Expense</MenuItem>
        </TextField>

        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#9e9e9e",
            "&:hover": { backgroundColor: "#7e7e7e" },
          }}
        >
          Add
        </Button>
      </form>

      {/* 🟡 بخش فیلتر و جستجو */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          marginBottom: "1rem",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Search by title or amount"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ flex: 1, minWidth: 250 }}
        />

        <TextField
          select
          label="Filter by category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Expense">Expense</MenuItem>
        </TextField>
      </div>

      {/* 🔵 لیست تراکنش‌ها */}
      <List>
        {filteredTransactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              mb: 1,
              color: "#424242",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              {transaction.title} — ${transaction.amount} ({transaction.category})
            </span>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteTransaction(transaction.id)}
              sx={{ color: "#9e9e9e", "&:hover": { color: "#616161" } }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Transactions;
