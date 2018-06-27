const mongoose = require('mongoose');


const programSchema = mongoose.Schema({
  title: { type: String, unique: true },
  description: String,
  imageUrl: String,
  contactPerson: String,
});

const Programs = mongoose.model('programs', programSchema);


module.exports = Programs;
