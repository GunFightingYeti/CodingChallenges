// This problem was asked by Two Sigma. (Hard)

// Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.
// The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.
// The second game: same, except that the stopping condition is a five followed by a five.
// Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.

//----------------------------------------------------------------------------------//

// Global Variables

// Die mechanics
let die = [1, 2, 3, 4, 5, 6];
let dieRoll = die[Math.floor(Math.random() * die.length)];
let memory = [];

// Goal numbers and number of tries
let goalNumberOne = 5;
let goalNumberTwo = 6;
let loopEnd = 1000;

// Score keeping
let gameOneScore = 0;
let gameTwoScore = 0;
let winner = '';

// Stats
let gameOneRolls = 0;
let gameTwoRolls = 0;
let gameOneAverage = 0;
let gameTwoAverage = 0;
let ties = 0;
let timeouts = 0;
let averagedWinner = '';
let showStats = 'n';

// Amount of games to play
let totalRounds = 10;

//----------------------------------------------------------------------------------//

// Game Function, rolls the die until the input goal is reached, outputs the goal and total rolls
function game(firstNumber, secondNumber) {

  memory = [];
  
  let goal = `${firstNumber}, ${secondNumber}`;
    
    for (gameLC=1; gameLC<=loopEnd; gameLC++) {
      
      dieRoll = die[Math.floor(Math.random() * die.length)];
      memory.push(dieRoll);

      // Track the current numbers
      let lastRoll = memory[memory.length-1];
      let secondToLast = memory[memory.length-2];
      let goalWindow = `${lastRoll}, ${secondToLast}`;
      
      // Win condition met, end loop or throw an error if a game is unable to be completed
      if (goalWindow == goal) {
        gameLC = loopEnd;
      }

  }
  
  return [goal, memory.length];

}

// Rounds function to compare two games against each other, outputs the goal and total rolls for both games
function rounds() {

  // Call game function twice with desired goal numbers
  firstResult = game(goalNumberOne,goalNumberTwo);
  secondResult = game(goalNumberOne,goalNumberOne);

  return firstResult, secondResult;

}

// Repeat the Rounds Function and console.logs the results
for (roundsLC=1; roundsLC<=totalRounds; roundsLC++) {

  rounds();
  
  // Increment the winners score
  if (firstResult[1] == loopEnd && secondResult[1] == loopEnd) {
    timeouts++;
    winner = `Error!  Both games reached the timeout condition of ${loopEnd}`;
  } else if (firstResult[1] == secondResult[1] && firstResult[1] !== loopEnd) {
    ties++;
    winner = `1 in ${loopEnd} chance on game ${roundsLC}, there has been a tie!`;
  } else if (firstResult[1] < secondResult[1]) {
    gameOneScore++;
    winner = `Game 1 (${firstResult[0]})`;
  } else if (firstResult[1] > secondResult[1]) {
    gameTwoScore++;
    winner = `Game 2 (${secondResult[0]})`;
  }

  // Add up all rolls for averaging
  gameOneRolls += firstResult[1];
  gameTwoRolls += secondResult[1];
  
  // Output the stats of each game to the console
  if (showStats == 'y') {
  console.log(`\n------------- Round ${roundsLC} ------------`);
  console.log(`Game One: ${firstResult[1]} rolls, Game Two: ${secondResult[1]} rolls`);
  console.log(`Winner: ${winner}`);
  }
}

// Calculate average number of rolls to achieve goal numbers
gameOneRolls = Math.round(gameOneRolls / totalRounds);
gameTwoRolls = Math.round(gameTwoRolls / totalRounds);

if (gameOneRolls < gameTwoRolls) {
  averagedWinner = `Game One with an average of ${gameOneRolls} rolls per game and a goal of ${firstResult[0]}`;
} else if (gameOneRolls > gameTwoRolls) {
  averagedWinner = `Game Two with an average of ${gameTwoRolls} rolls per game and a goal of ${secondResult[0]}`;
} else if (gameOneRolls == gameTwoRolls) {
  averagedWinner = `Out of ${totalRounds}, both games averaged ${gameOneRolls} rolls per game.`;
}


// Final score of all games plus stats
console.log(`
Final score out of ${totalRounds} Rounds
Game One: ${gameOneScore} total wins - Average rolls per game: ${gameOneRolls}
Game Two: ${gameTwoScore} total wins - Average rolls per game: ${gameTwoRolls}
Number of ties: ${ties}
Number of timeouts: ${timeouts}

Overall winner: ${averagedWinner}
`);

