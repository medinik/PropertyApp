const express = require('express')
    , Builder = require('./api/responseBuilder.js')

const app = express(),
    port = process.env.PORT || 3000;

const routes = require('./api/routes');
app.use('/', routes);

app.use(function (err, req, res, next) {
    console.error(err.stack)
    var responseBuilder = new Builder(500, 'failure', err.stack);
    res.json(responseBuilder);
})

module.exports = app.listen(port);
console.log('Property RESTful API server started on: ' + port);

