const Events = require('../database/event_schema');
const dbConnect = require('../database/db_connect');

exports.get = (req, res, next) => {

const eventsId = req.params.id;

Events.findByIdAndRemove({ _id: eventsId })
  .then(events => res.status(204).send(events))
  .catch(next);

};
