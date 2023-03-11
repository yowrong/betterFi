const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require("mongoose");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://bcit:0pyQMqP63d5dp7kN@cluster0.oskyzu1.mongodb.net/?retryWrites=true&w=majority");


app.use(bodyParser.json());

// set up logger
app.use(logger('dev'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { res.send("HELLO WORLD") });

app.listen(3000, () => console.log(`Server started on port ${PORT}`));