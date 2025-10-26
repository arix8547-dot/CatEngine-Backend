import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 10000; // Render prefers dynamic port

// 🟢 Neon PostgreSQL Connection (use env var)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // secure way for Render
  ssl: { rejectUnauthorized: false }
});

// 🔹 Root route
app.get("/", (req, res) => {
  res.send("🐾 CatEngine is alive and connected to NeonDB!");
});

// 🔹 Test route for DB
app.get("/dbtest", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
