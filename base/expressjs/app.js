const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productRouter = require('./routes/product');
const shopRouter = require('./routes/shop');

app.use((req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use((req, res, next) => {
    console.log('This always runs like in the middleware!');
    next();
});


app.use(bodyParser.urlencoded({extended: false}));

app.use('/product', productRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);