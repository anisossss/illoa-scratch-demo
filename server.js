const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/pattern1", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/pattern1/index.html"));
});
app.get("/pattern2", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/pattern2/index.html"));
});
app.get("/pattern3", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/pattern3/index.html"));
});
app.get("/circle", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/circle/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
