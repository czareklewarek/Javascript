function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if(argMoveId == 2){
      return 'papier'
  }
  else if(argMoveId == 3){
      return 'nożyce'
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  }
  else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    }
  else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    }
  else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!')
  }  
  else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


function buttonClicked(playerMove) {
  clearMessages();

    console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}


var buttonRock = document.getElementById('button-rock');
var buttonPaper = document.getElementById('button-paper');
var buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ 
    buttonClicked('Guzik kamień'); });
buttonPaper.addEventListener('click', function(){ 
    buttonClicked('Guzik papier'); });
buttonScissors.addEventListener('click', function(){ 
    buttonClicked('Guzik nożyce'); });
Przy okazji usunalem CI tu zbedne kopie tej samej funkcji, bo np. buttonClicked było parę razy 😉
A! W HTML koniecznie przestaw tagi <script> na sam koniec. Jesli sa one bowiem przed buttonami, to skrypty zostaną załadowane zanim buttony będą gotowe. A to źle, bo jednak nasz skrypt bedzie juz chcial cos z tymi buttonami robic.
Powinno byc wiec tak:
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Kamień, papier, nożyce</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="container">
		<div id="buttons"></div>
		<div id="messages"></div>
	</div>
	<div id="buttons">
		<button id="button-rock">Kamień</button>
		<button id="button-paper">Papier</button>
		<button id="button-scissors">Nożyce</button>
	</div>
	<script src="js/functions.js"></script>
	<script src="js/script.js"></script>
</body>
</html>
