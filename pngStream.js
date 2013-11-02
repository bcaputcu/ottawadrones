var arDrone = require('ar-drone');
var client = arDrone.createClient();

var pngStream = client.getPngStream();
pngStream.on('data', console.log);
