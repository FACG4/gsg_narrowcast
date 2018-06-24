const tape = require('tape');
const { Users } = require('../src/database/db_build');


tape('saving users into the database', (t) => {
  const hani = new Users({
    role: 1,
    username: 'hani',
    password: 'username',
    email: 'password',
  });
  const expected = 'hani';
  hani.save().then(() => {
    Users.find({ username: 'hani' }).then((res) => {
      t.equal(res[0].username, expected, 'the database should contain a user with the username hani');
      t.end();
    });
  }).catch(err => t.fail(err));
});

