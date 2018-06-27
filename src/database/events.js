const mongoose = require('mongoose')

 

const eventSchema = mongoose.Schema({
  startDate: Date,
  endDate: Date,
  title: String,
  hall: String,
  speaker: String,
  imageUrl: String,
  description: String,
});
module.exports= mongoose.model('Events', eventSchema) 
