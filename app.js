const express = require("express");
const { add } = require("./calculator");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("DevOps GHCR Demo App Running successfully on port 3000 - Sowmiya🚀");
});

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ result: add(a, b) });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
