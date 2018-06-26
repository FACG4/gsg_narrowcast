const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
  startDate: { type: Date, default: Date.now() },
  endDate: { type: Date, default: Date.now() },
  title: String,
  hall: String,
  speaker: String,
  imageUrl: String,
  descriptionTitle: String,
  DescriptionText: String,
});

const Events = mongoose.model('events', eventSchema);


module.exports = Events;
