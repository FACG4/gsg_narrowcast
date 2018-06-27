const supertest = require('supertest');
const tape = require('tape');
const app = require('../../src/app');
const Events = require('../../src/database/event_schema');




tape('testing the viewEvents route content type and status code', (t) => {
  Events.create(
    {
      startDate: '2016-05-18T16:20:00Z',
      endDate: '2016-05-18T16:30:00Z',
      title: 'geexelerator',
      hall: 'hall 1',
      speaker: 'Geeks',
      imageUrl: 'image 3',
      descriptionTitle: 'description',
      DescriptionText: 'text',
    },
    {
      startDate: '2016-05-19T16:20:00Z',
      endDate: '2016-05-19T16:30:00Z',
      title: 'geexelerator',
      hall: 'hall 1',
      speaker: 'Geeks',
      imageUrl: 'image 3',
      descriptionTitle: 'description',
      DescriptionText: 'text',
    },
  )
    .then(() => {
      supertest(app)
        .get('/viewEvents')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .end((err, response) => {
          console.log(response);
          t.error(err);
          t.equal(Object.values(response.headers).indexOf('text/html; charset=utf-8') > -1, true, 'content type should be html');
          t.end();
        });
    });
});

tape('testing the viewEvents route contain the inserted title', (t) => {
  Events.create(
    {
      startDate: '2016-05-18T16:30:00Z',
      endDate: '2016-05-18T16:40:00Z',
      title: 'geexelerator',
      hall: 'hall 1',
      speaker: 'Geeks',
      imageUrl: 'image 3',
      descriptionTitle: 'description',
      DescriptionText: 'text',
    },
    {
      startDate: '2016-06-18T16:20:00Z',
      endDate: '2016-06-18T16:30:00Z',
      title: 'geexelerator',
      hall: 'hall 1',
      speaker: 'Geeks',
      imageUrl: 'image 3',
      descriptionTitle: 'description',
      DescriptionText: 'text',
    },
  )
    .then(() => {
      supertest(app)
        .get('/viewEvents')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .end((err, response) => {
          t.error(err);
          t.equal(response.text.includes('geexelerator'), true, 'content type should be html');
          t.end();
        });
    });
});

tape('saving events into the database', (t) => {
  const expected = 'geexelerator';
  Events.create({
    startDate: '2016-07-18T16:20:00Z',
    endDate: '2016-07-18T16:30:00Z',
    title: 'geexelerator',
    speaker: 'Geeks',
    imageUrl: 'image 3',
    descriptionTitle: 'description',
    DescriptionText: 'text',
  })
.then(() => {
Events.find({ title: 'geexelerator'}).then((res) => {
      // console.log(res);
        t.equal(res[0].title, expected, 'the database should contain an event with the title geexelerator');
        t.end();
      })
        .catch(findErr => t.error(findErr));
    }).catch(insertErr => (insertErr));
});
