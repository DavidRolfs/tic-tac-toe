function Player(mark){
  this.mark = mark
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
      return this.turn;
    } else if(board[0][0] === board[3][0] && board[0][0] === board[6][0]){
        return this.turn;
    } else if(board[0][0] === board[4][0] && board[0][0] === board[8][0]) {
      return this.turn;
    }
  }
  if (board[5][0] === "X" || board[5][0]==="O"){
    if (board[5][0] === board[4][0] && board[5][0] === board[3][0]){
      return this.turn;
    } else if (board[5][0] === board[2][0] && board[5][0] === board[8][0]){
      return this.turn;
    }

  }
  if (board[7][0] === "X" || board[7][0]==="O"){
    if (board[7][0] === board[4][0] && board[7][0] === board[1][0]){
      return this.turn;
    }else if (board[7][0] === board[6][0] && board[7][0] === board[8][0]){
      return this.turn;
    }
  }
  if (board[2][0] === "X" || board[2][0]==="O"){
    if (board[2][0] === board[4][0] && board[2][0] === board[6][0]){
      return this.turn;
    }
  }
}

$(document).ready(function(){
  var player1 = new Player("X");
  var player2 = new Player("O");
  var turn = player1.mark;

  var gamePlay
  var board = [[],[],[],[],[],[],[],[],[]];
  var newGame = new Game(player1, player2, turn, board);
  $(".turn").text(newGame.turn);

  $(".radio").click(function(){
   gamePlay = $("input:radio[name=gamePlay]:checked").val();
//});


  //TwoPlayer
  if(gamePlay === "twoPlayer") {
    $("div").click(function(){
      if($(this).html()===""){
      clicked = $(this)[0].id;
      clicked = parseInt(clicked);
      board[clicked].push(newGame.turn);
      $("#" + clicked).text(newGame.turn);
      if (newGame.winCheck(board)){
        $(".winner").text(newGame.winCheck(board) + " is the WINNER!");
      }
      newGame.switchTurn();
      $(".turn").text(newGame.turn + "'s Move");
    }
    });
   }



  //PlayComputer
   else if (gamePlay === "computer"){
    $("div").click(function(){
      if($(this).html()===""){
      clicked = $(this)[0].id;
      clicked = parseInt(clicked);
      board[clicked].push(newGame.turn);
      $("#" + clicked).text(newGame.turn);
      Somthing();

      function Somthing(){
        var randomNumber = Math.floor((Math.random() * 8) + 1);
          console.log(board[randomNumber]);
          newGame.switchTurn();
        if(!(board[randomNumber][0])){
          board[randomNumber].push(newGame.turn);
          //newGame.switchTurn();
          // setTimeout(function(){

            $("#" + randomNumber).text(newGame.turn);newGame.switchTurn();
              if (newGame.winCheck(board)){
                $(".winner").text(newGame.winCheck(board) + " is the WINNER!");
              }

          // }, 1000);

        }else{
                  newGame.switchTurn();
          Somthing();
        }
      }
    }
    });
   }
});


  //CSS Styling
  //Add AI feature
  //README update
$("form#form").submit(function(event){
    event.preventDefault();
      board = [[],[],[],[],[],[],[],[],[]];
      $(".cell").html("");
      $(".winner").text("");
  });
});
