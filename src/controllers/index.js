const express = require('express');
const updateEvents = require('./update_events');
const addEvents = require('./add_events');
const viewEvents = require('./view_events');
const narrowcastView = require('./narrowcast_view');


const router = express.Router();

router.get('/update-event/:id', updateEvents.get);
router.post('/update-event/:id', updateEvents.post);
router.get('/add-event', addEvents.get);
router.post('/add-event', addEvents.post);
router.get('/view-events', viewEvents.get);
router.get('/', narrowcastView.get);

module.exports = router;
