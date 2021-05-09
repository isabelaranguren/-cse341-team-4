const path = require('path');

const express = require('express');

const rootDir = require('../../../util/path');

const router = express.Router();

const books = [];

router.get('/books', (req, res, next) => {
  res.render('books', { 
    pageTitle: 'Books Review',
    path: '/books'
  });
});

router.post('/add-book', (req, res, next) => {
  books.push({ title: req.body.title, summary: req.body.summary });
  console.log(books);
  res.redirect('/proveActivities/prove02');
});

exports.routes = router;
exports.books = books;