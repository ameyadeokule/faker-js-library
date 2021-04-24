var faker = require('../../index');

faker.locale = "en";

console.log(faker.fake('{{esport.leagues}}, {{esport.events}}, {{esport.games}}, {{esport.teams}} {{esport.players}} '));


return;


//console.log(faker.fake('{{finance.currencyName}} - {{finance.amount}}'));


//console.log(faker.fake('{{name.firstName}} {{name.lastName}}'));
