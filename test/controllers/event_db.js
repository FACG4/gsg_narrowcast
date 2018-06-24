const tape = require('tape');
const Events = require('../../src/database/events')

tape('save into database', (t) => {
   const createdEvent =  new Events({
        title:'freelancer',
        description: 'rrrrrrioj',
        speaker: 'saad',
        hall: 'open state',
        startDate : '',
        endDate: '',
    })
      createdEvent.save().then(()=>{
      event.find({ title:'freelancer'}).then((res)=> {
        t.equal(res[0].title,'freelancer');
        t.end();
      });
    }).catch(err => t.fail(err));
})

