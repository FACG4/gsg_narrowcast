const supertest = require('supertest');
const tape = require('tape');
const app = require('../../src/app');


tape('testing the home route content type and status code', (t) => {
  supertest(app)
    .get('/home')
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((err, res) => {
      t.error(err);
      t.equal(Object.values(res.headers).indexOf('text/html; charset=utf-8') > -1, true, 'content type should be html');
      t.end();
    });
});


tape('testing the home route technology', (t) => {
  supertest(app)
    .get('/home')
    .expect(200)
    .expect('x-powered-by', 'Express')
    .end((err, res) => {
      t.error(err);
      t.equal(Object.values(res.headers).indexOf('Express') > -1, true, 'headers should include the express technology');
      t.end();
    });
});
