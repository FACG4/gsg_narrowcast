const Events = require('../event_schema');

const viewQuery = (input, callback) => {
  Events.find(input).then((res) => {
    callback(null, res);
  }).catch(err => callback(err));
};

module.exports = viewQuery;
