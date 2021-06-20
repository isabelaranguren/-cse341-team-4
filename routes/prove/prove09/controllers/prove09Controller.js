const model = require('../models/prove09Models');


exports.getHome = (req, res, next) => {
    res.render('prove09/index', {
        pokemonList: pokemon,
        page: page,
        path: '/'
    })
};

exports.getPokemon = (req, res, next) => {
    const page = req.params.page;
    const offset = 10 * (page - 1);
    model.getPokemon(offset, (pokemon) => {
        res.render('pokemon', {
            pokemonList: pokemon,
            page: page,
            path: '/'
        });
    })
};