const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/task"); // 👈 NEW

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes); // 👈 NEW

app.get("/", (req, res) => {
  res.send("Student Portal Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});