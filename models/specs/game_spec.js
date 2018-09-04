const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const Card = require('../card.js');


let game;

beforeEach(function(){
  bob = new Player('Bob')
  jill = new Player('Jill')

  card1 = new Card('Superman', 6, 9, 7);
  card2 = new Card('Scarlet Witch', 7, 10, 5);
  card3 = new Card('Black Widow', 8, 6, 9);
  card4 = new Card('The Flash', 7, 4, 10);
  card5 = new Card('Wonder Woman', 8, 7, 5);
  card6 = new Card('Batman', 10, 5, 6);

    game = new Game(bob, jill);
  });

describe("game", function() {
  it("should deal", function() {
    let player1 = bob;
    let player2 = jill;
    game.deal();
    assert.deepStrictEqual(player1.cards, [card1,card3,card5]);
    assert.deepStrictEqual(player2.cards, [card2,card4,card6]);
  });
  it("should compare cards", function() {
    let p1card = card1;
    let p2card = card2;
    assert.strictEqual(game.compare('strength'), 'Bob');
  });
  it("should play a turn", function() {

  });
});
