const supertest = require('supertest');
const tape = require('tape');
const app = require('../../src/app');
const Events = require('../../src/database/event_schema');




tape('testing the viewEvents route content type and status code', (t) => {
  Events.create(
    {
      title: 'qqqqqq',
      hall: 'hahhhh',
    },
    {
      title: 'wwwwwww',
      hall: 'ttttttt',
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
      title: 'qqqqqq',
      hall: 'hahhhh',
    },
    {
      title: 'wwwwwww',
      hall: 'ttttttt',
    },
  )
    .then(() => {
      supertest(app)
        .get('/viewEvents')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .end((err, response) => {
          t.error(err);
          t.equal(response.text.includes('qqqqqq'), true, 'content type should be html');
          t.end();
        });
    });
});

tape('saving events into the database', (t) => {
  const expected = 'gsg';
  Events.create({
    title: 'gsg',
    hall: 'hall 1',
  })
  .then(() => {
    Events.find({ title: 'gsg'}).then((res) => {
      // console.log(res);
      t.equal(res[0].title, expected, 'the database should contain an event with the title gsg');
      t.end();
    })
    .catch(findErr => t.error(findErr));
  }).catch(insertErr => (insertErr));
});
