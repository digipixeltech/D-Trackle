const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors())
app.use(express.json())

app.set('view engine', 'jsx')

app.get("/", (req, res) => {
   res.send('body');
});
app.listen(3000);

