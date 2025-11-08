import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// ✅ serve built React frontend
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// ✅ fallback to index.html for SPA routing
app.get("*", (_req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`[express] serving on port ${port}`);
});
