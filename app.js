document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch ( city ) {
    var key = 'ba9321c489c75d3a7f0c21c0199f92f9';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) // convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
            //catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch( 'Tallinn');
}