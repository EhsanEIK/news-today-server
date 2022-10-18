const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const categoris = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send("News Today Server!");
})

app.get('/categories', (req, res) => {
    res.send(categoris);
})

app.listen(port, () => {
    console.log("News server is runnin on port:", port);
})