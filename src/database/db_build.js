const { db, mongoose } = require('./db_connect');
const AddEvent=mongoose.model('event,eventSchema')

db.on('error', console.error.bind(console, 'connection error');
  .once('open', () => {
    console.log('we\'re live');
  });

// schema is the equivalent of a table in postgres. in vanilla mongodb, it's called collection.
const { Schema } = mongoose;

// each key here is the column, and the value is what we expect to go into that column.
const usersSchema = new Schema({
  role: Number,
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
});

const AddEventSchema = new Schema({
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

// models basically allow us to create and interact with rows.
// In plain mongodb it's called documents.
const Users = mongoose.model('users', usersSchema);
const Events = mongoose.model('ninja', ninjaSchema);
const Programs = mongoose.model('programs', programSchema);



// for example, Users.find({ username: farah, age: 26 }) should select any document(row)
// with username value of farah and age value of 26.

db.addEvent.insert('freelancer')
event.Schema.methods.title = function () {
  var titel = this.name
    ? "freelancer" + this.name
    : "";
  console.log(freelancer);
}

// var Kitten = mongoose.model('Kitten', kittySchema);

var schema = new Schema({

})

db.createCollection("events", function(err, res) {
  if (err) throw err;
  console.log("Collection created!");
  db.close();
})






module.exports = { Users, AddEvent, Programs };
