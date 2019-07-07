$(document).ready(function() {
  var winsCounter = 0;
  var lossesCounter = 0;
  var userGussedNumber = 0;
  var randomTargetNumber = "";

  // image buttons to generate random number from 1 to 12
  $(".btnImage01").val(Math.floor(Math.random() * 12) + 1);
  $(".btnImage02").val(Math.floor(Math.random() * 12) + 1);
  $(".btnImage03").val(Math.floor(Math.random() * 12) + 1);
  $(".btnImage04").val(Math.floor(Math.random() * 12) + 1);

  // start the value of wins from 0
  $(".displayNumberOfWins").text("Wins: " + winsCounter);

  // start the value of losses from 0
  $(".displayNumberOfLosses").text("Losses: " + lossesCounter);

  // start the guessing value from 0 and the sum value will display in the userGuessedNumber
  $(".displayValueFromUserGuess").text("Your Guess: " + userGussedNumber);

  // display a random number generated from line 25 in the empty string of randomTargetNumber
  $(".displayValueFromCrystals").text("Target Number: " + randomTargetNumber);
});
