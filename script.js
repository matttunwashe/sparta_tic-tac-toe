// $function(event) {
//   console.log('DOM is ready');
//
//     $(".reset").css("background-color", "red");
//
//
//
//   }


$(function (event) {
  //it shows that dom is ready to use
  console.log('DOM is ready');

//main function that enables you to play the game.
$ (function playGame() {

//first player
    var player1 = play1();
//Second player.
    var player2 = play2();
//tracks the winner
    var win = winner();
    // var result = scores();

    var box = $(this);
    if(td.hasClass('x') || box.hasClass('o')){
      //prevents user from clicking on the same box
      alert('This has been selected');
    }else {
      //setting the winner and also display of the winners message
      if(player === 1){
        td.addClass('x');
          if (winner('x')){
            alert("Congrats" + player1 + "wins")
          }else {
            player = 2;
          }
        }
          else {
            //setting the winner and also display of the winners message
            if(player2 === 2){
              td.addClass('o');
                if (winner('o')){
                  alert("Congrats" + player2 + "wins")

          }
        player2 = 2;
      }
      else{
        td.addClass('o');

        player1 = 1;
      }
    }

}
});



$(function play1() {
  //displays x
  $('td').click(function(){
    // console.log("I've been clicked");
    $(this).html('x')
  })
})

$(function play2() {
  //displays o
  $('td:odd').click(function(){
    // console.log("I've been clicked");
    $(this).html('o')
  })
});
//win possibilities
function winner(symbol) {
  if($('#0').hasClass(symbol) && $('#1').hasClass(symbol) && $('#2').hasClass(symbol))
  {
    return true;
  }
  else if ($('#3').hasClass(symbol) && $('#4').hasClass(symbol) && $('#5').hasClass(symbol)){
    return true;
  }
  else if ($('#6').hasClass(symbol) && $('#7').hasClass(symbol) && $('#8').hasClass(symbol))
  {
    return true;
  }
  else if ($('#0').hasClass(symbol) && $('#3').hasClass(symbol) && $('#6').hasClass(symbol))
  {
    return true;
  }
  else if ($('#1').hasClass(symbol) && $('#4').hasClass(symbol) && $('#7').hasClass(symbol)){
    return true;
  }
  else if ($('#2').hasClass(symbol) && $('#5').hasClass(symbol) && $('#8').hasClass(symbol))
  {
    return true;
  }
  else false;
}

//how to reset the button
$(document).ready(function()
{
    $('.reset').on('click', function()
    {
        $(".reset").trigger("reset");
    });

});

//players turn



playgame();

});


// var array = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[6,4,2],[1,4,7],[2,5,8]];
// if (array === true) {
// $.each(array, function() {
//   console.log("win");
//   // else {
//   //   console.log("lose");
//   // }
// })
// }

// $.each(yourObject, function( index, value ) {
//     console.log(value.values);
//     console.log(value.input);
// });

// function winCase() {
//   switch (win) {
//     case expression:
//
//       break;
//     default:
//
//   }
// }
//
//
// winCase();


//create player 1 and player 2
//reset button not working.

  // $("#reset").css("background-color", "red");

  // $('#reset').click(function(){
  //            $('td')[0].reset();
  // });

// $("td").append("<td>X</td>");

// $('button').one('click', function() {
//   $('#td').append($("<td>X</td>");
// });
