const tape = require('tape');
const supertest = require('supertest');
const app = require('../../src/app');
const Events = require('../../src/database/event_schema');


// testing the update event route
tape('testing the update event route', (t) => {
  Events.find({ title: 'coding for everyone' }).then((res) => {
    supertest(app)
      .get(`/update-event/${res[0].id}`)
      .expect(200)
      .end((err, res) => {
        if (err) return t.error(err);
        t.equal(JSON.stringify(res).includes('</form>'), true, 'render response should include a form element');
        t.end();
      });
  })
    .catch((err) => {
      t.error(err);
    });
});
