const tape = require('tape');
const supertest = require('supertest');
const app = require('../../src/app');
const Events = require('../../src/database/event_schema');
const query = require('../../src/database/queries/update_events_query');

// testing the update event route
tape('testing the update event route', (t) => {
  supertest(app)
    .get('/update-event/id')
    .expect(200)
    .end((err, res) => {
      if (err) return t.error(err);
      t.equal(JSON.stringify(res).includes('</form>'), true, 'render response should include a form element');
      t.end();
    });
});
