const saveEvent = require('../database/queries/saveEvent');

exports.get = (req, res, next) => {
    res.render('event', {event: true, script: 'event_dom.js', title: 'My page' });
}

 exports.post = (req, res, next) => {
     console.log(req.body);
     console.log('razan', req.body.title, req.body.description, req.body.speaker,
      req.body.hall, req.body.startDate, req.body.endDate );
    const { title, description, speaker, hall, startDate, endDate } = req.body;
    saveEvent({title, description, speaker, hall, startDate, endDate})
    .then(event => {
        // return res.json({
        //    msg: 'success'
        // })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: 'Error in creating New Event . please try again..'
        })
    })

    
};