const Events = require('../event_schema');

const viewQuery = (callback) => {
  Events.find({}).then((res) => {
    callback(null, res);
  }).catch(err => callback(err));
};

module.exports = viewQuery;
