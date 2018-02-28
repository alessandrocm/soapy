const App = require('./app');
const { app } = require('./config');

const proxy = new App();

proxy.server.listen(app.port, err => {
  if (err) {
    return console.error(err);
  }

  console.log(`App is listening on port ${app.port}`);
});
