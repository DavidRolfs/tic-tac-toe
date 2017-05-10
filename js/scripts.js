function Player(mark){
  this.mark = mark
};

function Space(number){
  this.number = number
};

function Game(player1, player2, turn){
  this.player1 = player1;
  this.player2 = player2;
  this.turn = turn;

};

Game.prototype.switchTurn = function(){
  if (this.turn === this.player1.mark){
    this.turn = this.player2.mark;
  } else {
    this.turn = this.player1.mark;
  }
}

Game.prototype.winCheck = function(board){
  if (board[0][0] === "X" || board[0][0]==="O"){
    if(board[0][0] === board[1][0] && board[0][0] === board[2][0]){
      alert(this.turn + "Wins");
    } else if(board[0][0] === board[3][0] && board[0][0] === board[6][0]){
        alert(this.turn + "wins");
    } else if(board[0][0] === board[4][0] && board[0][0] === board[8][0]) {
      alert(this.turn + "wins");
    }
  }
  if (board[5][0] === "X" || board[5][0]==="O"){
    if (board[5][0] === board[4][0] && board[5][0] === board[3][0]){
      alert (this.turn + "wins");
    } else if (board[5][0] === board[2][0] && board[5][0] === board[8][0]){
      alert (this.turn + "wins");
    }

  }
  if (board[7][0] === "X" || board[7][0]==="O"){
    if (board[7][0] === board[4][0] && board[7][0] === board[1][0]){
      alert (this.turn + "wins");
    }else if (board[7][0] === board[6][0] && board[7][0] === board[8][0]){
      alert (this.turn + "wins");
    }
  }
  if (board[2][0] === "X" || board[2][0]==="O"){
    if (board[2][0] === board[4][0] && board[2][0] === board[6][0]){
      alert (this.turn + "wins");
    }
  }
}

$(document).ready(function(){
  var player1 = new Player("X");
  var player2 = new Player("O");
  var turn = player1.mark;

  var board = [[],[],[],[],[],[],[],[],[]];
  var newGame = new Game(player1, player2, turn, board);

  $("div").click(function(){
    if($(this).html()===""){
    clicked = $(this)[0].id;
    clicked = parseInt(clicked);
    board[clicked].push(newGame.turn);
    $("#" + clicked).text(newGame.turn);
    newGame.winCheck(board);
    newGame.switchTurn();
  }

  });
});
