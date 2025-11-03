import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { useTransactions } from "../context/TransactionContext.jsx";
import PieReports from "../components/PieCharts";
import LineReports from "../components/LineChart";

const Reports = () => {
  const { transactions } = useTransactions();

  // 🎯 داده برای چارت دایره‌ای
  const categoryTotals = transactions.reduce((acc, item) => {
    const title = item.title || "Other";
    acc[title] = (acc[title] || 0) + Number(item.amount);
    return acc;
  }, {});

  const pieData = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value,
  }));

  // 🎯 داده برای چارت خطی (مثلاً بر اساس تاریخ id)
  const lineData = transactions.map((t) => ({
    date: new Date(t.id).toLocaleDateString("en-US"), // تاریخ از id
    amount: Number(t.amount),
  }));

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Financial Reports
      </Typography>

      {/* چیدمان افقی: Pie سمت چپ و Line سمت راست */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1, minWidth: 500 }}>
          <PieReports data={pieData} />
        </Box>

        <Box sx={{ flex: 1, minWidth: 350 , mt:8}}>
          <LineReports data={lineData} />
        </Box>
      </Box>
    </Container>
  );
};

export default Reports;

