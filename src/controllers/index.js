 const express = require('express');

const router = express.Router();
const event = require('./event')
const login = require('./login');

router.post('/event', event.post);
router.get('/event', event.get);

// router.get('/login', login.get);
// router.post('/login', login.post);

module.exports=router
