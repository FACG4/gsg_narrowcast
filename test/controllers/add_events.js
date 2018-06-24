const tape = require('tape');
const Events = require('../../src/database/event_schema');


//creating events to be tested in the update function.

tape('add first event', (t) => {
  Events.create({
    startDate: '2016-05-18T16:20:00Z',
    endDate: '2016-05-18T16:20:00Z',
    title: 'coding for everyone',
    hall: 'hall 1',
    speaker: 'FACG',
    imageUrl: 'image 1',
    descriptionTitle: 'description',
    DescriptionText: 'text',
  }).then(() => {
    Events.find({ title: 'coding for everyone' }).then((res) => {
      t.equal(res[0].speaker, 'FACG', 'event 1 should be properly added.');
      t.end();
    })
    .catch(err => console.log(err));
  }).catch(err => console.log(err))
});

tape('add second event', (t) => {
  Events.create({
    startDate: '2016-05-18T16:20:00Z',
    endDate: '2016-05-18T16:20:00Z',
    title: 'freelance',
    hall: 'hall 1',
    speaker: 'Saad',
    imageUrl: 'image 1',
    descriptionTitle: 'description',
    DescriptionText: 'text',
  }).then(() => {
    Events.find({ title: 'freelance' }).then((res) => {
      t.equal(res[0].speaker, 'Saad', 'event 2 should be properly added.');
      t.end();
    })
    .catch(err => t.error(err));
  })
});

tape('add third event', (t) => {
  Events.create({
    startDate: '2016-05-18T16:20:00Z',
    endDate: '2016-05-18T16:20:00Z',
    title: 'geexelerator',
    hall: 'hall 1',
    speaker: 'Geeks',
    imageUrl: 'image 3',
    descriptionTitle: 'description',
    DescriptionText: 'text',
  }).then(() => {
    Events.find({ title: 'geexelerator' }).then((res) => {
      t.equal(res[0].speaker, 'Geeks', 'event 3 should be properly added.');
      t.end();
    })
    .catch(err => t.error(err));
  })
});

tape('add fourth event', (t) => {
  Events.create({
    startDate: '2016-05-18T16:20:00Z',
    endDate: '2016-05-18T16:20:00Z',
    title: 'coding for everyone',
    hall: 'hall 1',
    speaker: 'FACG',
    imageUrl: 'image 4',
    descriptionTitle: 'description',
    DescriptionText: 'text',
  }).then(() => {
    Events.find({ title: 'coding for everyone' }).then((res) => {
      t.equal(res[0].speaker, 'FACG', 'event 4 should be properly added.');
      t.end();
    })
    .catch(err => t.error(err));
  })
});
