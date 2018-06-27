const tape = require('tape');
const supertest = require('supertest');
const app = require('../../src/app');


tape('testing the error 404 display file', (t) => {
  supertest(app)
    .get('/*')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(Object.values(res.headers).indexOf('text/html; charset=utf-8') > -1, true, 'content type should be html');
      t.end();
    });
});


tape('testing the error 404 display file', (t) => {
  supertest(app)
    .get('/*')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text.includes('Page Not Found'), true, 'error should inform the user that the page is not found');
      t.end();
    });
});
