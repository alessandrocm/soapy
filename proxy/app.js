const http = require('http');
const express = require('express');
const soap = require('soap');
const raw = require('./middleware/raw');
const morgan = require('./middleware/morgan');
const wsdl = require('./wsdl');
const soapService = require('./operations');

class App {

  constructor() {
    this.init();
    this.middleware();
    this.operations();
  }

  init() {
    this.app = express();
    this.server = http.createServer(this.app);
  }

  middleware() {
    this.app.use(raw);
    this.app.use(morgan);
  }

  operations() {
    this.soap = soap.listen(this.app, '/mediahub', soapService, wsdl);
  }

}

module.exports = App;
