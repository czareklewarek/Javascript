const playGame = function (playerInput) {
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);
    console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);
    let gameResult = displayResult(argComputerMove, argPlayerMove);
    printMessage(gameResult);
};
const getMoveName = function (argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
};
const displayResult = function (argComputerMove, argPlayerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        return 'Ty wygrywasz!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        return 'Przegrałeś !';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        return 'Przegrałeś !';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        return 'Ty wygrywasz!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        return 'Przegrałeś !';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        return 'Ty wygrywasz!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        return 'Remis!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        return 'Remis!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        return 'Remis!';
    }
};
document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});
}
