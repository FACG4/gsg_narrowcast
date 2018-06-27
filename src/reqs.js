const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const fs = require('fs');
const controllers = require('./controllers');
const { serverError, notFound } = require('./controllers/error');

console.log(serverError, notFound);

module.exports = { express, path, exphbs, fs, controllers, serverError, notFound };
