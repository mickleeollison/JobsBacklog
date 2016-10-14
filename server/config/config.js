var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  development: {
    db: 'mongodb://localhost/jobbacklog',
    rootPath: rootPath,
    port: process.env.PORT || 2000
  }
}