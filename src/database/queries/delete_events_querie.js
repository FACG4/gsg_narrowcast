const Events = require('../event_schema');

const deleteQuery = (req, callback) => {

  Events.findByIdAndRemove(req, (err, response) => {
    if (err) return res.status(500).send(err);
    callback();
  })
    .then(() => {
    })
    .catch(err => err);
};

module.exports = deleteQuery;
