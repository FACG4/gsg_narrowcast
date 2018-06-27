const Events = require('../database/event_schema');
const dbConnect = require('../database/db_connect');
const deleteQuery = require('../database/queries/delete_events_querie');

exports.get = (req, res, next) => {
  deleteQuery(req.params.id, (err, result) => {
    // validate
    if (err) return next(err);
    const response = {
      message: 'Event successfully deleted',
      id: req.params.id,
    };
    return res.status(200).send(JSON.stringify(response));
  });
};
