const bodyParser = require('body-parser');
const appConfig = require('../config').app;

module.exports = bodyParser.raw({type: function(){return true;}, limit: appConfig.requestLimit});
