const socket = io('/');

socket.on('update-list', () => {
    populateList();
});

const populateList = () => {
    fetch('/proveActivities/prove11/fetchAll')
        .then(res => res.json())
        .then(data => {
            const herosList = document.querySelector('.herosList');
            herosList.innerText = '';
            for (let i = 0; i < data.avengers.length; i++) {
                const hero = document.createElement('li');
                const heroPower = document.createElement('p');
                heroPower.innerText = `Name: ${data.avengers[i].name}`;
                const heroSuper = document.createElement('p');
                heroSuper.innerText = `Status: ${data.avengers[i].heroPower}`;
                hero.appendChild(heroPower);
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

    fetch('/proveActivities/prove11/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newName, newHero })
    })
        .then(res => {
            document.getElementById('newName').value = ''
            document.getElementById('newHero').value = ''
            populateList()
            socket.emit('new-name');

        })
        .catch(err => {
            document.getElementById('newName').value = ''
            document.getElementById('newHero').value = ''
            console.error(err)
        })
}

populateList();