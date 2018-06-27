const findQuery = require('../database/queries/find_query');

exports.get = (req, res) => {
  findQuery((err, result) => {
    res.render('narrowcast_view', {
      result,
    });
  });
};
