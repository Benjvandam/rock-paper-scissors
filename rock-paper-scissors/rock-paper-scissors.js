// Pseudocode
    // For the number of games
        // Get the input from the computer - getComputerChoice
        // While user has not selected rock, paper or scissors
            //Get the input from the user
        // Play a round of rock-paper-scissors using playerSelection and computerSelection
        // Determine the user of the round
    // Determine the winner
        // If computer has more wins, computer wins
        // else player wins
    // Output the winner


    // Generate a random integer between 0 and 2 for the computer selection
    // We will assume that 
        // Rock: 0
        // Paper: 1
        // Scissors: 2
    function getComputerChoice () {
        const numberSelected = Math.floor(Math.random()*3);
        let computerSelection = "";
        switch (numberSelected){
            case (0):
                computerSelection = "rock";
                break;
            case (1):
                computerSelection = "paper";
                break;
            case (2):
                computerSelection = "scissors";
                break;
            default:
                computerSelection = "There is an error in the numberSelected";
                break;
        }
        console.log(`The computer's choice is ${computerSelection}`);
        return computerSelection;
    }

    // Get the user selection, keep asking as long as they didn't respond with rock, paper, or sciossors
    function getUserChoice() {
        let keepGoing = true;
        let userChoice = "User choice was not well received";
        userChoice = prompt("Please Select rock, paper or scissors").toLowerCase();
            if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
                keepGoing = false;
            }
        while(keepGoing){
            userChoice = prompt("You haven't selected the correct option. Please Select rock, paper or scissors").toLowerCase();
            if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
                keepGoing = false;
            }
        }
        console.log(`The user choice is ${userChoice}`);
        return userChoice;
    }

    // Determine the winner for a round based on user selection and computer selection
    function playRound(computerSelection,userSelection) {
        if (userSelection == "rock"){
            if (computerSelection == "paper"){
                return "computer";
            }
            else if (computerSelection == "scissors"){
                return "player";
            }
            else {
                return "draw";
            }
        }
        
        if (userSelection == "paper"){
                if (computerSelection == "paper"){
                    return "draw";
                }
                else if (computerSelection == "scissors"){
                    return "computer";
                }
                else {
                    return "player";
                }
            }

        if (userSelection == "scissors"){
            if (computerSelection == "paper"){
                return "player";
            }
            else if (computerSelection == "scissors"){
                return "draw";
            }
            else {
                return "computer";
            }
        }

        return "There is an error in the conditional statements"
        }

    // This function simulates the games, other functions are called through this function.
    function game(numberRounds){
        let computerSelection = "";
        let playerSelection = "";
        let computerScore = 0;
        let playerScore = 0;
        for (i=0;i<numberRounds;i++){
            computerSelection = getComputerChoice();
            playerSelection = getUserChoice();
            if (playRound(computerSelection, playerSelection) == "computer"){
                computerScore++;
                alert(`The winner of the round is computer`);
            }
            else if ((playRound(computerSelection, playerSelection) == "player")){
                playerScore++;
                alert(`The winner of the round is player`);
            }
            else{
                alert(`This round was a draw`);
            }
        }

        if (computerScore > playerScore){
            alert(`The computer wins with score ${computerScore}, player has score ${playerScore}`);
        }
        else if (computerScore < playerScore){
            alert(`The player wins with score ${playerScore}, computer has score ${computerScore}`);

        }
        else{
            alert(`It's a draw, computer has score ${computerScore}, and player has score ${playerScore}`);
        }
    }

    //const numberRounds = 5;
    //game(numberRounds);

    // This function gets the choice of the user

    let computerSelection = "";
    let winner = "";
    let playerSelection = "";
    let computerScore = 0;
    let playerScore = 0;
    let rounds = 0;

    let choices = document.querySelectorAll('button');

    choices.forEach(choice => {

        choice.addEventListener('click', () => {
            
            computerSelection = getComputerChoice();
            playerSelection = choice.textContent;
            
            // do something with the selected content
            winner = playRound(computerSelection,playerSelection);
            console.log(winner); 

            if (winner == "computer"){
                computerScore++;
            }
            else if (winner == "player"){
                playerScore++;
            }
            
            const result = document.querySelector('#displayResult');
            result.textContent = `The winner of the round is ${winner}`;

            const score = document.querySelector('#score');
            score.textContent = `The current score Player: ${playerScore} and Computer: ${computerScore}`;

            rounds++;
            if (rounds == 5){
                if (playerScore > computerScore){
                    score.textContent = `The game is over, Player won`;    
                }
                else if (computerScore > playerScore){
                    score.textContent = `The game is over, Computer won`;
                }
                else {
                    score.textContent = `The game is over, it was a draw`;
                }
                

                playerScore = 0;
                computerScore = 0;
                rounds = 0;
            }



        });
    });

    
      

    

