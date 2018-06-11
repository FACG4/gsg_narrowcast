const connect = require('../db_connect');

const query = sql => new Promise((resolve, reject) => {
  connect.query(sql, (err, res) => {
    if (err) reject(err);
    resolve(res);
  });
});

module.exports = query;
