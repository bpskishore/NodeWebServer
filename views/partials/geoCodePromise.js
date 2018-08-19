var request = require('request');
var yargs = require('yargs');

var getCoordinates = (address) => {
  const URL_VALUE = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAcGQFwRc5u3B55rP3HPEJU1qSReommWiw&address=${address}`;
    return new Promise((resolve, reject) => {

      request({
         url: URL_VALUE,
         json: true
      }, (error, response, body) => {
        if(error) {
          reject(`Ah. isn't that weird? something went wrong`);
        } else if(body.status === 'ZERO_RESULTS') {
            reject(`hmmm...I didnt quite get that, try again`);
        } else {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        }

      });

    });

}

getCoordinates('517501').then((obj)=> {
  console.log(JSON.stringify(obj, undefined, 2));
});
