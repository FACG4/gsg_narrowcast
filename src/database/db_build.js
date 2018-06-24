const { dbConnection, mongoose } = require('./db_connect');
// const { Schema } = mongoose;

const Schema = mongoose.Schema;
const eventSchema = new Schema({
  startDate: Date,
  endDate: Date,
  title: String,
  hall: String,
  speaker: String,
  imageUrl: String,
  descriptionTitle: String,
  DescriptionText: String
}); 
const event= mongoose.model('event' ,eventSchema);



// db.on('error', console.error.bind(console, 'connection error');
//   .once('open', () => {
//     console.log('we\'re live');
//   });

// schema is the equivalent of a table in postgres. in vanilla mongodb, it's called collection.


// each key here is the column, and the value is what we expect to go into that column.
const usersSchema = new Schema({
  role: Number,
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
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
// event = mongoose.model('events', eventsSchema);
const Programs = mongoose.model('programs', programSchema);







module.exports = { Users, event, Programs };
