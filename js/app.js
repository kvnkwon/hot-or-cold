
$(document).ready(function(){

	/*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
	$("a.close").click(function() {
		$(".overlay").fadeOut(1000);
	});

  function Game() {

    //Generate random winning number
    var winningNumber = Math.floor((Math.random() * 100) + 1);

    //Create the guess count variable
    var guessCount = 0;

    //Comparing the guess with the winning number
    this.checkGuess = function(guess) {
      if (guess == winningNumber) {
        victory(guess);
      } else if (guess > winningNumber) {
        highGuess(guess);
      } else if (guess < winningNumber) {
        lowGuess(guess);
      } else {
        alert("Guess invalid. Try again!");
      }
    };

    //Reset and start new game
    this.newGame = function() {
      winningNumber = Math.floor((Math.random() * 100) + 1);
      guessCount = 0;
      $('#userGuess').val('');
      $('#userGuess').focus();
      $("#guessList").empty();
      $("#count").html(guessCount);
      $("#feedback").html("Make a guess!");
    };

    //Feedback for various guesses
    function victory(guess) {
      addWinningGuess(guess);
      $("#feedback").html("You won!");
    }

    function highGuess(guess) {
      addHighGuess(guess);
      $("#feedback").html("Too high!");
    }

    function lowGuess(guess) {
      addLowGuess(guess);
      $("#feedback").html("Too low!");
    }

    //Adding Guesses to list and Updating Count
    function updateCount() {
      guessCount += 1;
      $("#count").html(guessCount);
    }

    function addWinningGuess(guess) {
      updateCount();
      $("#guessList").append("<li class='victory'>" + guess + '</li>');
    }

    function addHighGuess(guess) {
      updateCount();
      $("#guessList").append("<li class='high'>" + guess + '</li>');
    }

    function addLowGuess(guess) {
      updateCount();
      $("#guessList").append("<li class='low'>" + guess + '</li>');
    }

  }

  //Start new game on page load
  $('#userGuess').focus();
  var game = new Game();

  //Guess a number
  $(document).on('submit', '.guess-form', function(event) {
    event.preventDefault();
    var guessNumber = $('input[name="userGuess"]').val();
    game.checkGuess(guessNumber);
  });

  //Reset and play new game
  $(document).on('click', '.new', function(event) {
    event.preventDefault();
    game.newGame();
  });

});


