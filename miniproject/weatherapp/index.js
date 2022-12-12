const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4fe2df8c1amsh47e93879f090a4ap19d328jsnfe823ac27a64',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));