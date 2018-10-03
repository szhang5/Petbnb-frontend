const petbnbServiceClient = require('./pet-bnb-service-client');

function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

module.exports = function petbnbServiceCall(req, res) {
  const body = req.body;
  const endpoint = lowercaseFirstLetter(req.params.endpoint);
  console.log('body', body);
  // console.log('req', req);
  petbnbServiceClient.call(endpoint, body, req.session)
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
};




// var PROTO_PATH = __dirname + '/protos/pet_bnb_service.proto';

// var grpc = require('grpc');
// var protoLoader = require('@grpc/proto-loader');
// var packageDefinition = protoLoader.loadSync(
//     PROTO_PATH,
//     {keepCase: true,
//      longs: String,
//      enums: String,
//      defaults: true,
//      oneofs: true
//     });
// var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
// // The protoDescriptor object has the full package hierarchy
// var petBnbService = protoDescriptor.petbnbservice;
// var client = new petBnbService.PetBnbService('nodejs-backend:50051',
//                                        grpc.credentials.createInsecure());

// client.sayHello({name: 'you'}, function(err, response) {
//   console.log('Greeting:', response);
// });

// client.sayHelloAgain({name: 'you'}, function(err, response) {
//   console.log('Greeting:', response);
// });
