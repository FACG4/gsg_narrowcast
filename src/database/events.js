const mongoose = require('mongoose')

  // startDate: {type:Date , required: false},
//   endDate: {type:Date , required: false},

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
