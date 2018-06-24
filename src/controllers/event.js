const event = require('../database/events')

// localhost:3000/events/
exports.get = (req, res) => {
    event.find()
    .then(events => {
        console.log(events)
        const eventData = {
            count : events.length,
             events: events.map(data => {
               return {
                    title: events.title,
                    description: events.description,
                    hall: events.hall,
                    startDate: events.startDate,
                    endDate: events.endDate,
                    speaker: events.speaker
                    } 
                }) 
            }
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            message: 'Event not found'
        })
    })
}

// localhost:3000/events/create
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
        res.status(201).json({
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
//  localhost:3000/event/delete/eventId
exports.detele = (req, res, next) => {
    const id = req.params.eventId
    console.log('DeletedId', id)
    event.findByIdAndRemove(id)
    .then(res => {
        res.json({
            message: 'Remove event from database successfully',
            res
        })
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error in removing Event from database'
        })
    })
}