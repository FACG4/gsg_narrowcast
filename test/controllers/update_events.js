const tape = require('tape');
const supertest = require('supertest');
const app = require('../../src/app');
const Events = require('../../src/database/event_schema');

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

// testing the update event function.
tape('updating 2nd document with title coding for everyone in the collection', (t) => {
  Events.find({ title: 'coding for everyone' }).then((res) => {
    supertest(app)
      .post(`/update-event/${res[1].id}`)
      .send({
        startDate: '2016-05-18T16:20:00Z',
        endDate: '2016-05-18T16:20:00Z',
        title: 'new events',
        hall: 'hall 5',
        speaker: 'new people',
        imageUrl: 'image 4',
        descriptionTitle: 'description',
        DescriptionText: 'text',
      })
      .expect(200)
      .end((err, response) => {
        if (err) t.end(err);
        t.equal(JSON.stringify(response).includes('new people'), true, '2nd coding for everyone should be updated to the new event with new people as speakers');
        t.end();
      });
  }).catch(err => t.error(err));
});
