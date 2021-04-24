var fs = require('fs');

var faker = require('../../index');


// generate dataSet as example
fs.writeFile(__dirname + '/dataSet.json',  JSON.stringify(faker.esport.playerCard()), function() {
  console.log("dataSet generated successfully!");
});
// generate bigDataSet as example
var bigSet = [];

for(var i = 20; i >= 0; i--){
  bigSet.push(faker.esport.playerCard());
};

fs.writeFile(__dirname + '/bigDataSet.json',  JSON.stringify(bigSet,null, '\t'), function() {
  console.log("bigDataSet generated successfully!");
});
