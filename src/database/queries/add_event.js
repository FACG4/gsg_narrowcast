
const Events = require('../events.js');

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

module.exports  =schema ;

