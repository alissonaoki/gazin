require('rootpath')();

const cors = require('cors');

const express = require('express');

const bodyParser = require('body-parser');

const errorHandler = require('./src/middleware/error-handler');

const developersRouter = require('./src/routes/routes') 

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(cors());

app.use('/developers', developersRouter);

app.use(errorHandler);

module.exports = app;