const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const categoris = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send("News Today Server!");
})

app.get('/categories', (req, res) => {
    res.send(categoris);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const singleNews = news.find(n => n._id === id);
    res.send(singleNews);
})

app.listen(port, () => {
    console.log("News server is runnin on port:", port);
})