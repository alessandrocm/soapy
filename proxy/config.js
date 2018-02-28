const app = {
  name        : 'soapy',
  environment : process.env.NODE_ENV || 'development',
  port        : process.env.PORT || 3001,
  requestLimit: process.env.REQUEST_SIZE || '5mb'
};

module.exports = {
  app
};
