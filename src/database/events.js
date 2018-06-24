const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
  startDate: {type:Date , required: true, default: Date.now},
  endDate: {type:Date , required: true, default: Date.now},
  title: String,
  hall: String,
  speaker: String,
  imageUrl: String,
  descriptionTitle: String,
  DescriptionText: String
})

module.exports= mongoose.model('Events', eventSchema) 