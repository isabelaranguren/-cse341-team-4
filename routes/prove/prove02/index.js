const router = require('express').Router();
const path = require('path');
const rootDir = require('../../../util/path');
const booksData = require('./books');



router.get('/', (req, res, next) => {
  const books = booksData.books;
  res.render('index', { 
    books: books,
    pageTitle: 'Home',
    path: '/',
  });
});

router.use('/', booksData.routes);

module.exports = router;





