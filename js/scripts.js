function Player(mark){
  this.mark = mark
};

function Space(number){
  this.number = number
};

function Game(player1, player2, turn, board){
  this.player1 = player1;
  this.player2 = player2;
  this.turn = turn;
  this.boardspaces = board;
};

Game.prototype.switchTurn = function(){
  if (this.turn === this.player1.mark){
    this.turn = this.player2.mark;
  } else {
    this.turn = this.player1.mark;
  }
}

Game.prototype.winCheck = function(clickCount){


}


  // this.win = player game prototype

$(document).ready(function(){
  var player1 = new Player("X");
  var player2 = new Player("O");
  var turn = player1.mark;
  // var board = ["space1","space2","space3","space4","space5","space6","space7","space8","space9"];
  var board = [[],[],[],[],[],[],[],[],[]];
  var newGame = new Game(player1, player2, turn, board);
  var clickCount = 0;
  //console.log(newGame);
  $("div").click(function(){
    clicked = $(this)[0].id;
    clicked = parseInt(clicked);
    clickCount++;
    //mark this.space with current player.mark
     //console.log(newGame.boardspaces[clicked])
     newGame.boardspaces[clicked].push(newGame.turn);

     newGame.winCheck(clickCount);
     console.log(newGame.turn);
     console.log(newGame.winCheck(clickCount));


     console.log(clickCount);


    //call board.prototype.check function

    // console.log(spaceNumber.number);


    newGame.switchTurn();
    //console.log(newGame.turn);
  });

});
