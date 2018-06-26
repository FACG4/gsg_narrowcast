const Events = require('../event_schema');

const findQuery = (req, callback) => {
  if (!callback && typeof req === 'function') {
    Events.find({})
      .then((res) => {
        req(null, res);
      })
      .catch(err => req(err));
  } else if (callback && typeof callback === 'function') {
    Events.find(req)
      .then((res) => {
        callback(null, res);
      })
      .catch(err => req(err));
  }
};

module.exports = findQuery;
