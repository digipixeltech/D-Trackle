const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.use(express.static(
  path.join(__dirname, "../client/dist")
));

app.use((req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/dist/index.html")
  );
});

app.listen(5000, () => {
  console.log("Server running");
});