const routes = require('express').Router();
const adminRoutes = require('./routes/admin');
const productRoutes = require('./routes/product');


routes.use('/admin', adminRoutes);
routes.use(productRoutes);

module.exports = routes;
