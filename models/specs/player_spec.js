const assert = require('assert');
const Player = require('../player.js');

let player;

beforeEach(function(){
  player = new Player('Bob');
});

describe("player", function() {
  it("should have a name", function() {
    assert.strictEqual(player.name, 'Bob');
  });
});
