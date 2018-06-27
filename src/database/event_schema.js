const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
  startDate: Date,
  endDate: Date,
  title: String,
  hall: String,
  speaker: String,
  imageUrl: String,
  descriptionTitle: String,
  DescriptionText: String,
});

const Events = mongoose.model('events', eventSchema);


module.exports = Events;
