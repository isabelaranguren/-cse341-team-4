let prev = null // Setup placeholders for our next and prev links.
let next = null

const pokeList = document.getElementById('pokeList') // Grab the appropriate html element

const getData = async (url = 'http://localhost:5000/pokemon/1') => {
    const response = await fetch(url, {
        // Await the response.
        method: 'GET'
    })
    return response.json() // Wrap in a promise using JSON formatting.
}

const populateList = url => {
    const data = getData(url) // Make the request.
    clearList()

    data.then(json => {
        for (const i in json.results) {
            pokeList.innerHTML += `<li>${json.results[i].name}</li>`
            next = json.next
            prev = json.previous
        }
    })
}

const clearList = () => {
    pokeList.innerHTML = '' // Clear list to prevent more than ten items listed.
}

const populateNext = () => {
    if (next !== null) {
        populateList(next)
    } else {
        return
    }
}

const populatePrev = () => {
    if (prev !== null) {
        populateList(prev)
    } else {
        return
    }
}

// Initialize data
populateList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')

document.getElementById('nextBtn').addEventListener('click', populateNext)
document.getElementById('prevBtn').addEventListener('click', populatePrev)
