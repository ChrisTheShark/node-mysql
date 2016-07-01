"use strict";
const express = require('express'),
      app = express(),
      mysql = require('mysql'),
      morgan = require('morgan'),
      IoC = require('electrolyte');

IoC.use(IoC.dir('components'));

app.use(morgan('combined'));
app.get('/users', IoC.create('routes/userRoute'));

app.listen(3000, () => {
    console.log('Now listening on port 3000.');
});