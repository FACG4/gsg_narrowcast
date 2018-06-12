const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  role: Number,
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
});

const eventSchema = new Schema({
  startDate: Date,
  endDate: Date,
  title: String,
  hall: String,
  speaker: String,
  imageUrl: String,
  descriptionTitle: String,
  DescriptionText: String,
});

const programSchema = new Schema({
  title: { type: String, unique: true },
  description: String,
  imageUrl: String,
  contactPerson: String,
});

const Users = mongoose.model('users', usersSchema);
const Events = mongoose.model('events', eventSchema);
const Programs = mongoose.model('programs', programSchema);


module.exports = { Users, Events, Programs };
