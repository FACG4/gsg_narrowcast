const Events = require('../database/events');

exports.get = (req, res, next) => {
    res.render('event', {event: true, script: 'event_dom.js', title: 'My page' });
}

 exports.post = (req, res, next) => {
    
    const schema =  {
        title: req.body.title,
        description: req.body.description,
        speaker:req.body.title,
        hall:req.body.hall,
        startDate:req.body.startDate,
        endDate:req.body.endDate

    }
    Events.create(schema)
    .then(docs=>{
        res.end()
    })
    .catch(err => {
        res.end()
    })

    

    
};