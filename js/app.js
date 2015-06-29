
$(document).ready(function(){

	/*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
	$("a.close").click(function() {
		$(".overlay").fadeOut(1000);
	});

  $('#userGuess').focus();
  var game = new Game();

  //Guess a number
  $(document).on('submit', '.guess-form', function(event) {
    event.preventDefault();
    var guessNumber = $('input[name="userGuess"]').val();
    game.checkGuess(guessNumber);
  });

  //New game
  $(document).on('click', '.new', function(event) {
    event.preventDefault();
    game.newGame();
  });


  // Generate a random number

  function Game() {
    var winningNumber = Math.floor((Math.random() * 100) + 1);
    var guessCount = 0;

    this.checkGuess = function(guess) {
      guessCount += 1;
      if (guess == winningNumber) {
        $("#guessList").append("<li class='victory'>" + guess + '</li>');
        $("#count").html(guessCount);
        $("#feedback").html("You won!");
      } else if (guess > winningNumber) {
        $("#guessList").append("<li class='high'>" + guess + '</li>');
        $("#count").html(guessCount);
        $("#feedback").html("Too high!");
      } else if (guess < winningNumber) {
        $("#guessList").append("<li class='low'>" + guess + '</li>');
        $("#count").html(guessCount);
        $("#feedback").html("Too low!");
      } else {
        alert("Guess invalid. Try again!");
      }
    };

    this.newGame = function() {
      winningNumber = Math.floor((Math.random() * 100) + 1);
      guessCount = 0;
      $('#userGuess').val('');
      $('#userGuess').focus();
      $("#guessList").empty();
      $("#count").html(guessCount);
      $("#feedback").html("Make a guess!");
    };

  }

});


