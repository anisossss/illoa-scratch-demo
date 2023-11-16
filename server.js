const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/goal", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "goal", "/index.html"));
});
app.get("/khazna", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "khazna", "/index.html"));
});
app.get("/septvivante", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "septvivante", "/index.html"));
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
