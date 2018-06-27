const router = require('express').Router();
const viewEvents = require('./viewEvents');
const home = require('./home');
const { notFound } = require('./error');
const deleteEvents = require('./deleteEvents');

router.get('/viewEvents', viewEvents.get);
router.get('/deleteEvents/:id', deleteEvents.get);
router.get('/home', home.get);
router.get('/*', notFound);


module.exports = router;
