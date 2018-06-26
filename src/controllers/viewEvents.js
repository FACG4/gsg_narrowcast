const Events = require('../database/event_schema');
const dbConnect = require('../database/db_connect');
const viewQuery = require('../database/queries/view_events_querie');

exports.get = (req, res, next) => {
  viewQuery(undefined, (err, result) => {
    // validate
    if (err) return res.render('error', { error: 'abc', text: err });
    res.render('view_events', { result, style: 'viewEventsStyle', title: 'View Events Page' });
  })
};
