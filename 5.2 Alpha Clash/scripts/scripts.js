function play() {
    // console.log("Play Start Now")
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // set randomly generated alphabet to the screen 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function handleKeyboardButtonPress(event) {
    // console.log('button pressed');
    const playerPressed = event.key;
    // console.log(playerPressed);

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerHTML;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, currentAlphabet);

    if (playerPressed === expectedAlphabet) {
        // console.log('You Got A Point');

        /* 
        update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore; 
        */

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        // console.log('You Missed. You Lost A Life');

        /*
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife; 
        */

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            // console.log('Game Over');
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)