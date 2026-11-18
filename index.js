const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "My VAPI API",
    status: "online",
    message: "My API is working!"
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    success: true,
    message: "Hello from my own API!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("API running on port " + PORT);
});