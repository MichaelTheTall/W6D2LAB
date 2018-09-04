const assert = require('assert');
const Card = require('../card.js');

let card;

beforeEach(function(){
  card = new Card('Superman', 6, 9, 7);
});

describe("card", function() {
  it("should have a name", function() {
    assert.strictEqual(card.name, 'Superman');
  });
  it("should have Intelligence", function() {
    assert.strictEqual(card.intelligence, 6);
  });
  it("should have Strength", function() {
    assert.strictEqual(card.strength, 9);
  });
  it("should have Agility", function() {
    assert.deepStrictEqual(card.agility, 7);
  });
});
