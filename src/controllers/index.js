 const express = require('express');

const router = express.Router();
const event = require('./event')
const login = require('./login');

router.get('/events/', event.get)
router.post('/events/create', event.post)
router.get('/events/delete/:eventId', event.delete)
router.get('/login', login.get);
router.post('/login', login.post);


