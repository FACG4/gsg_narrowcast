const supertest = require('supertest');
const tape = require('tape');
const app = require('../../src/app');
const Events = require('../../src/database/event_schema');

tape('testing the delete of the event that have the title qqqqqq', (t) => {
  const event = new Events({ title : 'qqqqqq'});
  event.save().then(() => {
    supertest(app)
      .get(`/delete_event/${event._id}`)
      .end((err, res) => {
        t.error(err);
        t.equal(JSON.stringify(event).includes('ddddddd'), false, 'event should not contain any thing');
        t.end();
      });
  });
});
