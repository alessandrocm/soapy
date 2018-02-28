const morgan = require('morgan');
const appConfig = require('../config').app;

module.exports = morgan('dev', {
  skip: function (req, res) {
    return (appConfig.environment === 'production');
  }
});
