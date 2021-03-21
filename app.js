var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(3000, () => {
    console.log('APP RUNNING ON PORT 3000!!!');
});

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!');
});