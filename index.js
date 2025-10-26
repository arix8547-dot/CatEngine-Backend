import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 5000;

// 🟢 Neon PostgreSQL Connection
const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_zHRFin9JLe2a@ep-dry-hill-af7d6ld0-pooler.c-2.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
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
