const query = require('../database/queries/update_events_query');
const Events = require('../database/event_schema');

exports.post = (req, res, next) => {
  const request = {
    params: req.params,
    body: req.body,
  };
  const myStartingDate = new Date(req.body.startDate).getTime();
  const myEndingDate = new Date(req.body.endDate).getTime();

  // validation for nulls and consistent data
  if (Object.values(request.body).includes('')) return res.send({ message: 'Please make sure that all fields are filled with valid data' });
  if (!myStartingDate || !myEndingDate) return res.send({ message: 'please specify date and time of the event' });
  if (Date.now() > myStartingDate) return res.send({ message: 'You have set the starting date to the past' });
  if (Date.now() > myEndingDate) return res.send({ message: 'You have set the ending date to the past' });
  if (myStartingDate > myEndingDate) return res.send({ message: 'Event ending date cannot be earlier the starting date' });
  query(request, (err, response) => {
    if (err) return next(err);
    return res.send({ message: 'event has been successfully updated' });
  });
};

exports.get = (req, res, next) => {
  Events.findById(req.params.id).then((response) => {
    res.render('update_events', {
      response,
      startDate: response.startDate,
    });
  })
    .catch(err => next(err));
};
