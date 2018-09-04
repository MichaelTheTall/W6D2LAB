const Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.allcards = [card1,card2,card3,card4,card5,card6];
}

Game.prototype.deal = function () {
  this.player1.cards = [card1,card3,card5];
  this.player2.cards = [card2,card4,card6];
};
  let lastplayer;
  let wonlastturn;
Game.prototype.turn = function () {
  
};
