const tape = require('tape');
const { Users } = require('../src/database/db_build');

tape('saving users into the database', (t) => {
  const mohammed = new Users({
    role: 1,
    username: 'mohammed',
    password: 'username',
    email: 'password',
  });
  const expected = false;
  mohammed.save().then(() => {
    t.equal(mohammed.isNew, expected, 'user should exist in the database and not be identified as new');
  }).catch(err => t.fail(err));
  t.end();
});

module.exports = tape;
