const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
  startDate: {type:Date , required: false},
  endDate: {type:Date , required: false},
  title: String,
  hall: String,
  speaker: String,
  imageUrl: String,
  descriptionTitle: String,
  DescriptionText: String
})

module.exports= mongoose.model('Events', eventSchema) 