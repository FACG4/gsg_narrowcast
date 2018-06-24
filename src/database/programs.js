const mongoose = require('mongoose')

const programSchema = mongoose.Schema({
    title: { type: String, unique: true },
    description: String,
    imageUrl: String,
    contactPerson: String,
  });
module.exports = mongoose.model('Programs', programSchema)