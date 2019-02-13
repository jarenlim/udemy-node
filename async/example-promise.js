// function doWork (data, callback) {
//     callback('done');
// }

// function doWorkPromise (data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject('everything is broken!');
//         }, 1000);
//         // reject({
//         //     error: 'something bad happened'
//         // });
//     });
// }

// doWorkPromise('some data').then(function (data) {
//     console.log(data);
// }, function (error) {
//     console.log(error);
// });
var request = require('request');

function getWeather (location) {
    return new Promise(function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = 'https://api.openweathermap.org/data/2.5/weather?appid=64f5d09e58a3084b4649c2be2e10fca7&q=' + encodedLocation + '&units=metric';

        if (!location) {
            return callback('No location provided');
        }

        request({
            url: url, 
            json: true
        }, function (error, response, body) {
            if (error) {
                reject('Unable to fetch weather.');
            } else {
                resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
            }
        });
    });
}

getWeather('san francisco').then(function (currentWeather) {
    console.log(currentWeather);
}, function(error) {
    console.log(error);
});