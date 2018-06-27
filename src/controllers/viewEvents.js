const dbConnect = require('../database/db_connect');
const viewQuery = require('../database/queries/view_events_querie');

exports.get = (req, res, next) => {
  viewQuery((err, result) => {
    // validate
    if (err) return next(err);
    return res.render('view_events', { result, style: 'viewEventsStyle', title: 'View Events Page' });
  });
};
