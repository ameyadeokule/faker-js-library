#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "en";

//console.log(faker.lorem.sentences())

//console.log(faker.name.findName())
//return;
//console.log(faker.address)
console.log(faker.esport.leagues())
console.log(faker.esport.events())
console.log(faker.esport.games())
console.log(faker.esport.teams())
console.log(faker.esport.players())


//faker.locale = "uk";

//console.log(faker.helpers.contextualCard());
