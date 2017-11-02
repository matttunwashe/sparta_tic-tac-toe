// $function(event) {
//   console.log('DOM is ready');
//
//     $(".reset").css("background-color", "red");
//
//
//
//   }


$(function (event) {
  console.log('DOM is ready');

$ (function playGame() {

    var player1 = play1();
    var player2 = play2();
    var win = winner();
    // var result = scores();

    var = box = $(this);
    if(box.hasClass('x') || box.hasClass('o')){
      alert('This has been selected');
    }else {
      if(player1 === 1){
        td.addClass('x');

        player2 = 2;
      }else{
        td.addClass('o');

        player1 = 1;
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
  } ($('#0').hasClass(symbol) && $('#3').hasClass(symbol) && $('#6').hasClass(symbol))
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
