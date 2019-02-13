var request = require('request');

module.exports = function (location, callback) {    
    var encodedLocation = encodeURIComponent(location);
    var url = 'https://api.openweathermap.org/data/2.5/weather?appid=64f5d09e58a3084b4649c2be2e10fca7&q=' + encodedLocation + '&units=metric';

    if (!location) {
        return callback('No location provided');
    }


    request({
        url: url, 
        json: true,
    }, function (error, response, body) {
        if (error) {
            callback('Unable to fetch weather.');
        } else {
            // console.log(JSON.stringify(body, null, 4));
            // It's 77.77 in somewhere
            callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
        }
    });
}

