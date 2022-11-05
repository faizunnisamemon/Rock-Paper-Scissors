
const totalScore = {computerScore: 0, playerScore: 0}


// getComputerChoice()
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Papper', 'Scissors']
    const randomChoice = Math.floor(Math.random() * 3)
    return rpsChoice[randomChoice]
}



function getResult(playerChoice, computerChoice) {

    // return the result of score based on if you won, drew or loss
    let score;

    // All stituation where human draw, set 'score' to 0
    if (playerChoice == computerChoice){
        score = 0
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    } else{
        score = -1
    }

    // return score
    return score
}

function showResult(score, playerChoice, computerChoice) {

    const resultDiv = document.getElementById ('result')
    const handsDiv = document.getElementById ('hands')
    const playerScoreDiv = document.getElementById('player-score') 
   
    if (score == -1){
        resultDiv.innerText = 'You Lose!'
    } else if (score == 0) {
        resultDiv.innerText = "It's a tie"
    } else {
        resultDiv.innerText = 'You won!'
    }

    handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
    playerScoreDiv.innerText = `Your score ${totalScore['playerScore']}`
}



// Calculate who won ans show it on the screen
function onClickRPS(playerChoice) {

    console.log({playerChoice})

    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    
    const score = getResult(playerChoice, computerChoice)

    totalScore['playerScore'] += score
    console.log ({score})
    showResult(score, playerChoice, computerChoice)
}

function playGame() {
    // use querySelector to select all RPS Buttons
    let rpsButtons = document.querySelectorAll('.rpsButton')
  
    // loop through the buttons using a forEach loop
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
  
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScore)
  }

function endGame(totalScore) {
    totalScore['playerScore'] = 0
    totalScore['computerscore'] = 0

    const resultDiv = document.getElementById ('result')
    const handsDiv = document.getElementById ('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ' '
    handsDiv.innerText = ' '
    playerScoreDiv.innerText = ' '
}  

playGame()



