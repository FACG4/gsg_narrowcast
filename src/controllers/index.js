const express = require('express');
const home = require('./home');
const updateEvents = require('./update_events');
const addEvents = require('./add_events');

const router = express.Router();

router.get('/home', home.get);
router.get('/update-event/:id', updateEvents.get);
router.post('/update-event/:id', updateEvents.post);
router.get('/add-event', addEvents.get);
router.post('/add-event', addEvents.post);

module.exports = router;
