var arDrone = require('ar-drone');
var client = arDrone.createClient();

console.log("Starting.");

client.on('navdata', console.log);
client.takeoff();

console.log("Took off.");

client.after(5000, function() {
  this.clockwise(0.5);
})
.after(3000, function() {
  this.animate('flipLeft', 15);
})
.after(1000, function() {
  this.stop();
  this.land();
});

console.log("Done.");
