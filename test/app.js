const tape = require('tape');
const app = require('../src/app');


tape('testing port', (t) => {
  const expected = '3000';
  t.equal(app.get('port'), expected, 'port should be set to 3000');
  t.end();
});
