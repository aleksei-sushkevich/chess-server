const express = require('express');
const mongoose = require('mongoose');
const gameController = require('./controllers/game');
const authController = require('./controllers/auth');
const cors = require("cors");

const MONGODB_URI =
    'mongodb://127.0.0.1/chess';

const app = express();


app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}));

app.use(express.json());

app.post('/controllers/game', gameController.postHistory);
app.get('/controllers/game/:userId', gameController.getHistory);
app.post('/controllers/auth/registration', authController.signup);
app.post('/controllers/auth/login', authController.login);

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });