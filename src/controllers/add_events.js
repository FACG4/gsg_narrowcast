const addQuery = require('../database/queries/add_events');

exports.post = (req, res, next) => {
  const myStartingDate = new Date(req.body.startDate).getTime();
  const myEndingDate = new Date(req.body.endDate).getTime();

  // validation for nulls and consistent data
  if (Object.values(req.body).includes('')) return res.send({ message: 'Please make sure that all fields are filled with valid data' });

  if (Date.now() > myStartingDate) return res.send({ message: 'You have set the starting date to the past' });
  if (Date.now() > myEndingDate) return res.send({ message: 'You have set the ending date to the past' });
  if (myStartingDate > myEndingDate) return res.send({ message: 'Event ending date cannot be earlier the starting date' });

  addQuery(req, (err, result) => {
    if (err) return next(err);
    res.send({ message: 'event has been added to the narrowcast' })
  });
};

exports.get = (req, res) => {
  res.render('add_events');
};
