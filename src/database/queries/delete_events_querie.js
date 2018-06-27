const Events = require('../event_schema');

const deleteQuery = (req, callback) => {
  Events.findByIdAndRemove(req, (err, response) => {
    callback(null, response);
  })
    .then(() => {
    })
    .catch(err => err);
};

module.exports = deleteQuery;
