const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();

//Middleware
app.use(cors())
app.use(express.json())

// Test Route
app.get("/", (req, res) => {
   res.send(`${PORT}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`server is running on ${PORT}`)
});