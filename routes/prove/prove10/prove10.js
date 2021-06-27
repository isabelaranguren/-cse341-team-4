const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = {
    "avengers": [
        {
            "name": "Tony Stark",
            "heroName": "Iron Man"
        },
        {
            "name": "Steve Rogers",
            "heroName": "Captain America"
        },
        {
            "name": "Thor Odinson",
            "heroName": "Thor"
        },
        {
            "name": "Bruce Banner",
            "heroName": "Hulk"
        },
        {
            "name": "Natasha Romanova",
            "heroName": "Black Widow"
        },
        {
            "name": "Clint Barton",
            "heroName": "Hawkeye"
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

    if (req.body.newName && req.body.newHero) {
        const newName = req.body.newName;
        const newHero = req.body.newHero;
        dummyData.avengers.push({ name: newName, heroName: newHero });
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;