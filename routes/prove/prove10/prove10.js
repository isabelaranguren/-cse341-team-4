const express = require('express');
const router = express.Router();
const fs = require('fs');


// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = {
    "avengers": [
        {
            "name": "Tony Stark",
            "heroPower": "Genius, billionaire, playboy, philanthropist"
        },
        {
            "name": "Steve Rogers",
            "heroPower": "Super Soldier"
        },
        {
            "name": "Thor Odinson",
            "heroPower": "God of Thunder"
        },
        {
            "name": "Bruce Banner",
            "heroPower": "Super Strength"
        },
        {
            "name": "Natasha Romanova",
            "heroPower": "Spy"
        },
        {
            "name": "Clint Barton",
            "heroPower": "Spy"
        }
    ]
}

router.get('/', (req, res, next) => {
    res.render('prove10/index', {
        title: 'Prove 10',
        path: '/teamActivities/10',
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {

    if (req.body.newName && req.body.newHero !== undefined) {
        const newName = req.body.newName;
        const newHero = req.body.newHero;
        if (!dummyData.avengers.some(a => a.name === newName && b.heroPower === newHero)) {
        dummyData.avengers.push({ name: newName, heroPower: newHero });
        res.sendStatus(200);
        }
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;