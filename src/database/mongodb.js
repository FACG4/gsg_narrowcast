

// // var mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost/event');
// var MongoEvent = require('mongodb').MongoEvent;
// var url = "mongodb://localhost:27017/";
// n 
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
//   dbo.collection("events").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     dbo.collection("events").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//     db.close();
//   });
// });















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