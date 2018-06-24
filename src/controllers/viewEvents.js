const Events = require('../database/event_schema');
const dbConnect = require('../database/db_connect');

exports.get = (req, res, next) => {
  Events.find().then((result) => {
    
      res.render('viewEvents',{result: result, style: 'viewEventsStyle',});
    }).catch(err => console.log(err));
};
