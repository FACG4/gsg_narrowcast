const express = require('express');

const router = express.Router();
const addEvent = require('./modle/AddEvent');

router.get('/AddEvent', AddEvent.get);
router.post('/AddEvent',  AddEvent.post);
router.Put('/ AddEvent',  AddEvent.put);

