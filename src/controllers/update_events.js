const query = require('../database/queries/update_events_query');
const Events = require('../database/event_schema');

exports.post = (req, res, next) => {
  query(req, res, (err, result) => {
    if (err) return next(err);
    res.send({ message: 'event updated successfully' });
  });
};


exports.get = (req, res, next) => {
  Events.findById(req.params.id).then((response) => {
    res.render('update_events', {
      result: response,
    });
  })
    .catch(err => next(err));
};
