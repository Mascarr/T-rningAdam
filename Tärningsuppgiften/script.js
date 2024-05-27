let scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('#rollDice').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. ett Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        // 2. Visar resultaten
        document.querySelector('#diceResult').textContent = dice;

        // 3. Uppdaterar score om rolled number inte va en 1a 
        if (dice !== 1) {
            // Addera Score
            roundScore += dice;
            document.querySelector('#current' + activePlayer).textContent = roundScore;
        } else {
            // Nästa Spelare
            nextPlayer();
        }
    }    
});

document.querySelector('#holdScore').addEventListener('click', function() {
    if(gamePlaying) {
        // Addera nuvarande score till GLOBAL score
        scores[activePlayer - 1] += roundScore;

        // Updaterar UI
        document.querySelector('#score' + activePlayer).textContent = scores[activePlayer - 1];

        // Kollar om spelaren vann spelet 
        if (scores[activePlayer - 1] >= 50) {
            document.querySelector('#message').textContent = 'Spelare ' + activePlayer + ' vinner!';
            gamePlaying = false;
        } else {
            // Nästa Seplare
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer = activePlayer === 1 ? 2 : 1;
    roundScore = 0;

    document.getElementById('current1').textContent = '0';
    document.getElementById('current2').textContent = '0';
    document.getElementById('diceResult').textContent = '-';

    document.getElementById('player1').classList.toggle('active');
    document.getElementById('player2').classList.toggle('active');
}

function init() {
    scores = [0, 0];
    activePlayer = 1;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('current1').textContent = '0';
    document.getElementById('current2').textContent = '0';
    document.getElementById('diceResult').textContent = '-';
    document.getElementById('message').textContent = '';

    document.getElementById('player1').classList.add('active');
    document.getElementById('player2').classList.remove('active');
}
