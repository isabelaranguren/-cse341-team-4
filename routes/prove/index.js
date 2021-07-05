const routes = require('express').Router();

routes.use('/prove02', require('./prove02'));
routes.use('/prove08', require('./prove08/routes/ta03'));
routes.use('/prove09', require('./prove09/routes/prove09Routes'));
routes.use('/prove10', require('./prove10/prove10'));
routes.use('/prove11', require('./prove11/prove11'));


module.exports = routes;
