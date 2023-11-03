const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/pattern", (req, res) => {
  // Append ".html" to the URL path
  res.sendFile(path.join(__dirname, "public", "pattern", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
