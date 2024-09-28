/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("API is working");
});

app.post("/verify", (req, res) => {
  const { code } = req.body;

  if (!code || code.length !== 6 || code[5] === "7") {
    return res.status(400).json({ message: "Invalid code" });
  }

  return res.status(200).json({ message: "Code successfully verified" });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
