const Events = require('../database/events')


 exports.post = (req, res, next) => {

    const newEvent = new Event({
        title: req.body.title,
        description: req.body.description,
        speaker: req.body.speaker,
        hall: req.body.hall,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    })
    console.log('newEvent', newEvent)
    newEvent.save()
    .then(event => {
        res.json({
            title: event.title,
            description: event.description,
            speaker: event.speaker,
            hall: event.hall,
            startDate: event.startDate,
            endDate: event.endDate

        })
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error in creating New Event . please try again..'
        })
    })
}
