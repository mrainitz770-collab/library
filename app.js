require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const bookRouter = require('./routes/book');
const userRouter = require('./routes/user');
const { engine } = require('express-handlebars');

const app = express();

app.get('/', (req, res) => {
    res.render('home');
});


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.log(err);
    });

app.use('/books', bookRouter);
app.use('/users', userRouter);



















module.exports = app;