const Events = require('../events')

module.exports = (object) => new Events({ object }).save();