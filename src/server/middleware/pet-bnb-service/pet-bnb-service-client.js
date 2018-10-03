const path = require('path');
const serviceClient = require('../serviceClient');

const protoPath = path.join(__dirname, 'pet_bnb_service.proto');
const options = {
  protoPath,
  className: 'PetBnbService',
};
const petbnbServiceClient = serviceClient.create('petbnbservice', options);

module.exports = petbnbServiceClient;



// var PROTO_PATH = __dirname + '/pet_bnb_service.proto';


// client.sayHello({name: 'you'}, function(err, response) {
//   console.log('Greeting:', response);
// });

// client.sayHelloAgain({name: 'you'}, function(err, response) {
//   console.log('Greeting:', response);
// });
