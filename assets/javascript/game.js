

// Array of numbers that user has to get by clicking cystals 
var numGuess = [19, 20, 21, 22, 23, 24, 25, 26, 2, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 18, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]

//Point values that will be assigned to crystals 
var numCrystals = {
  crystalOne: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  crystalTwo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  crystalThree: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  crystalFour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

}


var counter = 0;
var wins = 1;
var losses = 1;
var counterWins = 0;
var counterLosses = 0;


function reset() {
  randomNums = numGuess[Math.floor(Math.random() * numGuess.length++)];
  counter = 0;
  game = document.getElementsByClassName('dynamic');
  game[1].textContent = randomNums;
  game[2].textContent = 'Your Socre: ' + counter;
  randomCrystalOne = numCrystals.crystalOne[Math.floor(Math.random() * numCrystals.crystalOne.length++)];
  randomCrystalTwo = numCrystals.crystalTwo[Math.floor(Math.random() * numCrystals.crystalTwo.length++)];
  randomCrystalThree = numCrystals.crystalThree[Math.floor(Math.random() * numCrystals.crystalThree.length++)];
  randomCrystalFour = numCrystals.crystalFour[Math.floor(Math.random() * numCrystals.crystalFour.length++)];
}




// Randomizes the array of numbers the user has to guess

var randomNums = numGuess[Math.floor(Math.random() * numGuess.length)];

// console.log(randomNums)


// Randomizes the point values for each crystal 
var randomCrystalOne = numCrystals.crystalOne[Math.floor(Math.random() * numCrystals.crystalOne.length)];
// console.log(randomCrystalOne)

var randomCrystalTwo = numCrystals.crystalTwo[Math.floor(Math.random() * numCrystals.crystalTwo.length)];
// console.log(randomCrystalTwo)

var randomCrystalThree = numCrystals.crystalThree[Math.floor(Math.random() * numCrystals.crystalThree.length)];
// console.log(randomCrystalThree)

var randomCrystalFour = numCrystals.crystalFour[Math.floor(Math.random() * numCrystals.crystalFour.length)];
// console.log(randomCrystalFour)



// red 
$("#redcrystal").on("click", function () {
  counter += randomCrystalOne;
  game[2].textContent = 'Your Socre: ' + counter;
  // alert("Your new score is " + counter + " points")

  if (counter === randomNums) {
    alert("You win!");
    reset();
    counterWins += wins
    game[0].textContent = 'Wins: ' + counterWins + ' Losses: ' + counterLosses;
    
  }

 if (counter >= randomNums) {
    alert("You lose!");
    reset();
    counterLosses += losses
    game[0].textContent = 'Wins: ' + counterWins  + ' Losses: ' + counterLosses;
    
  }
});

// yellow
$("#yellowcrystal").on("click", function () {
  counter += randomCrystalTwo;
  game[2].textContent = 'Your Socre: ' + counter;
  // alert("Your new score is " + counter + " points")

  if (counter === randomNums) {
    alert("You win!");
    reset();
    counterWins += wins
    game[0].textContent = 'Wins: ' + counterWins + ' Losses: ' + counterLosses;
  }

   if (counter >= randomNums) {
    alert("You lose!");
    reset();
    counterLosses += losses
    game[0].textContent = 'Wins: ' + counterWins  + ' Losses: ' + counterLosses;
  }
});
// green
$("#greencrystal").on("click", function () {
  counter += randomCrystalThree;
  game[2].textContent = 'Your Socre: ' + counter;
  // alert("Your new score is " + counter + " points")

  if (counter === randomNums) {
    alert("You win!");
    reset();
    counterWins += wins
    game[0].textContent = 'Wins: ' + counterWins + ' Losses: ' + counterLosses;
    
  }

   if (counter >= randomNums) {
    alert("You lose!");
    reset();
    counterLosses += losses
    game[0].textContent = 'Wins: ' + counterWins  + ' Losses: ' + counterLosses;
  }
});

// blue
$("#bluecrystal").on("click", function () {
  counter += randomCrystalFour;
  game[2].textContent = 'Your Socre: ' + counter;
  // alert("Your new score is " + counter + " points")

  if (counter === randomNums) {
    alert("You win!");
    reset();
    counterWins += wins
    game[0].textContent = 'Wins: ' + counterWins + ' Losses: ' + counterLosses;
  }

   if (counter >= randomNums) {
    alert("You lose!");
    reset();
    counterLosses += losses
    game[0].textContent = 'Wins: ' + counterWins  + ' Losses: ' + counterLosses;
  }



});



var game = document.getElementsByClassName('dynamic');
console.log(game);

game[1].textContent = randomNums;

















