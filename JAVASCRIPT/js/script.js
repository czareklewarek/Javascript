

  var buttonTest, buttonRock, buttonPaper, buttonScissors;
  
  buttonTest = document.getElementById('button-test');
  buttonRock = document.getElementById('button-rock');
  buttonPaper = document.getElementById('button-paper');
  buttonScissors = document.getElementById('button-scissors');

  function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty");
    var computerMove, randomNumber;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    if (randomNumber == '1') {
     computerMove = 'kamień';
    } else if (randomNumber == '2'){
    computerMove = 'papier';
    }else if (randomNumber == '3'){
        computerMove = 'nożyce'
    }else {
    computerMove = 'nieznany ruch';
    }
  }


var playerMove, playerInput;
playerMove = argButtonName;

button-rock.addEventListener('click', function(){ 
    buttonClicked('Guzik kamień'); });
button-paper.addEventListener('click', function(){ 
    buttonClicked('Guzik papier'); });
button-scissors.addEventListener('click', function(){ 
    buttonClicked('Guzik nożyce'); });