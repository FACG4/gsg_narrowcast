

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/event');

var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
















// var event = mongoose.model('event,schema');
// app.post('/new',function(req,res)=>{
//     new wvent ({
//         name:req.body.titel,
//         speaker:req.body.name,
//         description:req.body.description,
//         hall:req.body.hall,
//         date:req.body.date

//     }).save(function(err,doc){
//         if(err)res.err(err);
//         else res.send('succesfully inserted');
//     })
// })

// // var cursor = db.collection('inventory').find({ title: 'freelancer' });