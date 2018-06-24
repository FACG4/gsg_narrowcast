const router = require('express').Router();
const viewEvents = require('./viewEvents');
const home = require('./home');
const { notFound } = require('./error');

// router.get('/viewEvents', viewEvents.get);
router.get('/viewEvents', viewEvents.get);
// router.delete('/viewEvents', viewEvents.delete);
router.get('/home', home.get);
router.get('/*', notFound);


module.exports = router;
