const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const create = (serviceName, options = {}) => {
  const {
    protoPath,
    className,
  } = options;


  const packageDefinition = protoLoader.loadSync(
      protoPath,
      {keepCase: true,
       longs: String,
       enums: String,
       defaults: true,
       oneofs: true
      });
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  const serviceProto = protoDescriptor.petbnbservice;
  const serviceClass = className;
  const service = {};

  service.call = (endpoint, parameters) => {
    return new Promise((resolve, reject) => {
      const client = new serviceProto[serviceClass]('nodejs-backend:50051', grpc.credentials.createInsecure());
      client[endpoint](parameters, (err, response) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(response);
          resolve(response);
        }
      });
    });
  };

  return service;
};

module.exports = {
  create,
};




// client.sayHelloAgain({name: 'you'}, function(err, response) {
//   console.log('Greeting:', response);
// });
