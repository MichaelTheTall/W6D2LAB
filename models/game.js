const Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.allcards = [card1,card2,card3,card4,card5,card6];
}

let wonlastturn;
let currentplayer;
let otherplayer;

Game.prototype.deal = function () {
  this.player1.cards = [card1,card3,card5];
  this.player2.cards = [card2,card4,card6];
};

Game.prototype.compare = function (category) {
  if (p1card.category > p2card.category) {
    return player1.name;
  } else if (p1card.category == p2card.category){
    return 'draw';
  } else {
    return player2.name;
  }
};

Game.prototype.turn = function () {
  let p1card = this.player1.cards.unshift();
  let p2card = this.player2.cards.unshift();

  let currentplayer = wonlastturn;

  let result = Game.compare(strength);

  if (result == 'Draw!' || result == currentplayer.name) {
    currentplayer.cards.push(p1card, p2card);
    wonlastturn = currentplayer;
    return currentplayer;
  } else {
    otherplayer.cards.push(p1card, p2card);
    wonlastturn = otherplayer;
    return otherplayer;
  }
};

module.exports = Game;
