const populateList = () => {
    fetch('/proveActivities/prove10/fetchAll')
        .then(res => res.json())
        .then(data => {
            const herosList = document.querySelector('.herosList');
            herosList.innerText = '';
            for (let i = 0; i < data.avengers.length; i++) {
                const hero = document.createElement('li');
                const heroName = document.createElement('p');
                heroName.innerText = `Name: ${data.avengers[i].name}`;
                const heroSuper = document.createElement('p');
                heroSuper.innerText = `Hero name: ${data.avengers[i].heroName}`;
                hero.appendChild(heroName);
                hero.appendChild(heroSuper);
                herosList.appendChild(hero);
            }
            console.log(herosList)
        })
        .catch(err => {
            console.error(err)
        })

};

const submitHero = () => {
    const newName = document.getElementById('newName').value
    const newHero = document.getElementById('newHero').value

    fetch('/proveActivities/prove10/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newName, newHero })
    })
        .then(res => {
            document.getElementById('newName').value = ''
            document.getElementById('newHero').value = ''
            populateList()
        })
        .catch(err => {
            document.getElementById('newName').value = ''
            document.getElementById('newHero').value = ''
            console.error(err)
        })
}

populateList();