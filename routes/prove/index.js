const routes = require('express').Router();

routes.use('/prove02', require('./prove02'));
routes.use('/prove08', require('./prove08/routes/ta03'));

module.exports = routes;




