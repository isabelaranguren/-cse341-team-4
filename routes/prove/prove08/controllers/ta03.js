// TA03 controller

const Product = require('../models/product');
const ITEMS_PER_PAGE = 10
// handle ta03/ 
exports.getProducts = (req, res, next) => {

    Product.fetchAll(products => {
        let page = +req.query.page || 1 // Grab our page number, 1 if undefined

        const indexStart = (page - 1) * ITEMS_PER_PAGE // Item index to start on...
        const indexEnd = page * ITEMS_PER_PAGE

        res.render('prove08/pages/ta03', {
            title: 'Prove 08',
            path: '/ta03',
            products: products.slice(indexStart, indexEnd),
            currentPage: page,
            hasNextPage: ITEMS_PER_PAGE * page < products.length,
            hasPreviousPage: page > 1,
            nextPage: page + 1,
            previousPage: page - 1,
            lastPage: Math.ceil(products.length / ITEMS_PER_PAGE)
        });
    });
};

// handle ta03/search
exports.getSearchProducts = (req, res, next) => {
    const query = req.query.query.toLowerCase();
    Product.search(query, filteredProducts => {
        res.render('prove08/pages/ta03', {
            title: 'Prove 08',
            path: '/ta03',
            products: filteredProducts
        });
    });
};