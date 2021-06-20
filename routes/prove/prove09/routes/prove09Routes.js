const express = require('express');
const router = express.Router();
const prove09Controller = require('../controllers/prove09Controller');

router.get('/', (req, res, next) => {
    res.render('prove09/index', {
        pageTitle: 'Prove 09',
        title: 'Pokemon API',
        books: []
    });
})
router.get('/get-pokemon/:page', prove09Controller.getPokemon);

module.exports = router;