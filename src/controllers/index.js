const express = require('express');
const home = require('./home');
const { notFound } = require('./error');

const router = express.Router();


router.get('/home', home.get);
router.get('/*', notFound);

module.exports = router;
