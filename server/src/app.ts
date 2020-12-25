const app = require('express')();
require('express-ws')(app);
const wsRoute = require('./routes/root');

app.use('/', wsRoute);

module.exports = app;
