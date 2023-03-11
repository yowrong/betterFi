const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(bodyParser.json());

// set up logger
app.use(logger('dev'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { res.send("HELLO WORLD") });

app.listen(3000, () => console.log(`Server started on port ${PORT}`));