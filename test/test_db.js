const tape = require('tape');
const Users = require('../src/database/users_schema');
const Events = require('../src/database/event_schema');


tape('saving users into the database', (t) => {
  const expected = 'hani';
  Users.create({
    role: 1,
    username: 'hani',
    password: 'username',
    email: 'password',
  })
    .then(() => {
      Users.find({ username: 'hani', email: 'password' }).then((res) => {
        t.equal(res[0].username, expected, 'the database should contain a user with the username hani');
        t.end();
      });
    }).catch(err => t.fail(err));
});


tape('saving users into the database', (t) => {
  const expected = 'farah';
  Users.create({
    role: 0,
    username: 'farah',
    password: 'username',
    email: 'hello',
  })
    .then(() => {
      Users.find({ username: 'farah', email: 'hello' }).then((res) => {
        console.log(res);
        t.equal(res[0].username, expected, 'the database should contain a user with the username hani');
        t.end();
      })
        .catch(findErr => t.error(findErr));
    }).catch(insertErr => (insertErr));
});

tape('checking type of response', (t) => {
  Users.find({}).then((res) => {
    t.equal(Array.isArray(res), true, 'result should be array');
    t.end();
  }).catch(err => console.log(err));
});
