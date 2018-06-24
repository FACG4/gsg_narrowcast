const tape = require('tape');
const event = require('../../src/database/events')

tape('save into database', (t) => {
   const CreatedEvent =  new event({
        title:'freelancer',
        description: 'rrrrrrioj',
        speaker: 'saad',
        hall: 'open state',
        startDate : '',
        endDate
    })
    const expected = CreatedEvent;
      event.save().then(()=>{
      event.find({ title:'freelancer'}).then((res)=> {
        t.equal(res[0].title,'freelancer');
        t.end();
      });
    }).catch(err => t.fail(err));
})