 const express = require('express');

const router = express.Router();
const event = require('./event')


router.post('/event', event.post);
router.get('/event', event.get);


module.exports=router
