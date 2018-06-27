const addQuery = require('../database/queries/add_events');

exports.post = (req, res, next) => {

  addQuery(req, (err, result) => {
    if (err) return next(err);
    res.send({ message: 'event has been added to the narrowcast' })
  });
};

exports.get = (req, res) => {
  res.render('add_events');
};
