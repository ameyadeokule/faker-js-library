/**
 *
 * @namespace faker.esport
 */

var Esport = function (faker) {
  var fake = faker.fake;
  var self = this;
  
  /**
   * 
   *
   * @method faker.esport.leagues
   */
  this.leagues = function () {
     return faker.random.arrayElement(faker.definitions.esport.leagues);
  }
  /**
   * 
   * 
   * @method faker.esport.events
   */
  this.events = function () {
     return faker.random.arrayElement(faker.definitions.esport.events);
  }
 /**
   * 
   *
   * @method faker.esport.games
   */
  this.games = function () {
     return faker.random.arrayElement(faker.definitions.esport.games);
  }
  /**
   * 
   *
   * @method faker.esport.teams
   */
  this.teams = function () {
     return faker.random.arrayElement(faker.definitions.esport.teams);
  }
  /**
   * 
   *
   * @method faker.esport.players
   */
  this.players = function () {
     return faker.random.arrayElement(faker.definitions.esport.players);
  }

 /**
   * playerCard
   *
   * @method faker.helpers.userCard
   */
  self.playerCard = function () {
      return {
          "name": faker.esport.players(),
          "team": faker.esport.teams(),
          "game": faker.esport.games(),
          "event": faker.esport.events(),
          "league": faker.esport.leagues(),
      };
  };

}
module['exports'] = Esport;

