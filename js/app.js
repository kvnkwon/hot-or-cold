
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
      var guessDifference = Math.abs(winningNumber - guess);
      if (winningNumber == guess) {
        victory(guess);
      } else if (guessDifference <= 5) {
        veryHotGuess(guess);
      } else if (guessDifference <= 10) {
        hotGuess(guess);
      } else if (guessDifference >= 10 && guessDifference <= 20) {
        warmGuess(guess);
      } else if (guessDifference >= 20 && guessDifference <= 30) {
        coldGuess(guess);
      } else if (guessDifference >= 30 && guessDifference <= 40) {
        veryColdGuess(guess);
      } else {
        freezingGuess(guess);
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

    //Call functions for the guess condition
    function victory(guess) {
      addWinningGuess(guess);
      setFeedback("You won!");
    }

    function veryHotGuess(guess) {
      addHotGuess(guess);
      setFeedback("YOW! VERY HOT!!!");
    }

    function hotGuess(guess) {
      addHotGuess(guess);
      setFeedback("Getting Hot!!");
    }

    function warmGuess(guess) {
      addWarmGuess(guess);
      setFeedback("Warm.");
    }

    function coldGuess(guess) {
      addColdGuess(guess);
      setFeedback("Cold!");
    }

    function veryColdGuess(guess) {
      addColdGuess(guess);
      setFeedback("Brrr..Very cold!");
    }

    function freezingGuess(guess) {
      addFreezingGuess(guess);
      setFeedback("FREEZING!");
    }

    //Set feedback
    function setFeedback(feedback) {
      $("#feedback").html(feedback);
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

    function addHotGuess(guess) {
      updateCount();
      $("#guessList").append("<li class='hot'>" + guess + '</li>');
    }

    function addWarmGuess(guess) {
      updateCount();
      $("#guessList").append("<li class='warm'>" + guess + '</li>');
    }

    function addColdGuess(guess) {
      updateCount();
      $("#guessList").append("<li class='cold'>" + guess + '</li>');
    }

    function addFreezingGuess(guess) {
      updateCount();
      $("#guessList").append("<li class='freezing'>" + guess + '</li>');
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


