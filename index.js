const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("News Today Server!");
})

app.listen(port, () => {
    console.log("News server is runnin on port:", port);
})