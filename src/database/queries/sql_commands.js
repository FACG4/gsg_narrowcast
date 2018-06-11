const { fs, path } = require('../../reqs')

const commands = {
  build: fs.readFileSync(path.join(__dirname, '..', 'db_build.sql')).toString(),
};

module.exports = commands;
