const URL = 'https://restcountries.eu/rest/v2';

function fetchCountries (name) {
    return fetch(`${URL}/name/${name}`)

.then((response) => response.json());    
}

export default { fetchCountries };