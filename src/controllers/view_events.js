const findQuery = require('../database/queries/find_query');

exports.get = (req, res, next) => {
  findQuery((err, result) => {
    if (err) return next(err);
    if (res.length === 0) return res.send({ message: 'there are no events currently scheduled' });
    return res.render('view_events', {
      result,
    });
  });
};
