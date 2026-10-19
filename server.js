require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL.split(","),
  })
);

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "API running by jjj" });
});

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    message: "Todo backend is running",
  });
});

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "API running" }));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

const PORT = process.env.PORT || 5000;
connectDB().then(() =>
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
);
