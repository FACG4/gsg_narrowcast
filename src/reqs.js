const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const fs = require('fs');
const Event = require ('./controllers/event')


module.exports = {
  express, path, exphbs, fs,Event,
};
