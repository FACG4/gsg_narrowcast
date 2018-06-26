const tape = require('tape');
const Events = require('../../src/database/events')

tape('save into database', (t) => {
   const createdEvent =  new Events({
        title:'freelancer',
        description: 'rrrrrrioj',
        speaker: 'saad',
        hall: 'open state',
        startDate : '2016-05-18T16:00:00Z',
        endDate: '2016-05-18T16:00:00Z',
    })
      createdEvent.save().then(()=>{
      Events.find({ title:'freelancer'}).then((res)=> {
        t.equal(res[0].title,'freelancer');
        t.end();
      });
    }).catch(err => t.fail(err));
})

tape('save into database', (t) => {
  const createdEvent =  new Events({
       title:'freelancer',
       description: 'rrrrrrioj',
       speaker: 'saad',
       hall: 'open state',
       startDate : '2016-05-18T16:00:00Z',
       endDate: '2016-05-18T16:00:00Z',
   })
     createdEvent.save().then(()=>{
     Events.find({speaker:'saad'}).then((res)=> {
       t.equal(res[1].speaker,'saad');
       t.end();
     });
   }).catch(err => t.fail(err));
})

