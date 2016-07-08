var grpc = require('grpc');
var protoDescriptor = grpc.load(__dirname + '/t.proto');
var test = protoDescriptor.test;

var cli = new test.Requests('localhost:1234', grpc.credentials.createInsecure());
cli.get(new test.RequestObj(new test.Context(), 'key'), function(err, result) {
  if(err) { return console.log('error', err); }
  console.log(result);
});
