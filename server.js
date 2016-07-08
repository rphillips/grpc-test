var grpc = require('grpc');
var protoDescriptor = grpc.load(__dirname + '/t.proto');
var test = protoDescriptor.test;

var server = new grpc.Server();
server.addProtoService(test.Requests.service, {
  get: function(call, callback) {
    callback(null, new test.Context(call.request.key));
  }
});
server.bind('localhost:1234', grpc.ServerCredentials.createInsecure());
server.start();
