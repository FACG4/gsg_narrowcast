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

tape('testing update of the 2nd coding for everyone', (t) => {
  Events.find({ title: 'coding for everyone' }).then((res) => {
    const request = {
      params: {
        id: res[1].id,
      },
      body: {
        startDate: '2016-05-18T16:20:00Z',
        endDate: '2016-05-18T16:30:00Z',
        title: 'geexelerator',
        hall: 'hall 1',
        speaker: 'Geeks',
        imageUrl: 'image 3',
        descriptionTitle: 'description',
        DescriptionText: 'text',
      },
    };
    supertest(app)
      .post(`/update-event/${request.params.id}`)
      .expect(200)
      .send(request.body)
      .end((err, res) => {
        t.equal(JSON.stringify(res.request).includes('geexelerator'), true, 'event should be replaced with geexelerator');
      });
  }).catch();
  t.end();
});

tape('testing update of the 2nd coding for everyone', (t) => {
  Events.find({ title: 'coding for everyone' }).then((res) => {
    const request = {
      params: {
        id: res[1].id,
      },
      body: {
        startDate: '2016-05-18T16:20:00Z',
        endDate: 'aa',
        title: 'geexelerator',
        hall: 'hall 1',
        speaker: 'Geeks',
        imageUrl: 'image 3',
        descriptionTitle: 'description',
        DescriptionText: 'text',
      },
    };
    supertest(app)
      .post(`/update-event/${request.params.id}`)
      .expect(200)
      .send(request.body)
      .end((err, res) => {
        t.equal(JSON.stringify(res.request).includes('geexelerator'), true, 'event endDate must be a date format');
      });
  }).catch();
  t.end();
});
