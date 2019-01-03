//global variables
var crystal = {
    purple:
     {
        name: "purple",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    },
    orange: {
        name:  "orange",
        value: 0
    },
    star: {
        name: "star",
        value: 0
    },
};

//Scores 
var yourScore = 0;
var targetScore = 0;

//Wins and Losses
var winCount = 0;
var lossCount = 0;

//this little jewel made my numbers show up on the html - it allows my functions to work in order or something like that...
$(document).ready(function () {

//functions
//math function so that we can get some random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the game
var startGame = function() {

//Resets the current score 
yourScore = 0;
 
//sets the new Target score (between 19 and 120)
targetScore = getRandom(19, 120);

//Sets the rand values for each crystal (between 1 and 12)
crystal.green.value = getRandom(1, 12);
crystal.orange.value = getRandom(1, 12);
crystal.purple.value = getRandom(1, 12);
crystal.star.value = getRandom(1, 12);
  
// jQuery to add input to the HTML
$("#your-Score").text(yourScore);
$("#target-Score").text(targetScore);

//Is any of this working?
console.log("Target Score: " + targetScore);
console.log("Green: " + crystal.green.value + " | Orange: " + crystal.orange.value + " | Purple: " + crystal.purple.value +  " | Star: " + crystal.star.value);
console.log("---------------------------");
};


//Check if we won or lost and reset the game
var checkWin = function() {

//do your if you lose
    if (yourScore > targetScore) {
        alert("Sorry, you lose.");
        console.log("You lost.");
    

    //add to loss counter
        lossCount++;

    //change the html
    $("#loss-Count").text(lossCount);

    //Restart the game
    startGame();
    }
    else if (yourScore === targetScore) {
    alert("Congratulations! You won!");
    console.log("You win.");
    //add to win counter
    winCount++;

    // Change the win count in HTML through jQuery
     $("#win-Count").text(winCount);


    //Restart the gaem
    startGame();
    }
};



//when you click on the crystals there should be a value added...
var addValues = function(crystal) {

 //Change Your Score
 yourScore += crystal.value; 
 
 //Add jQuery to connect to html
 $("#your-Score").text(yourScore);

 //calling the checkWin function
 checkWin();
 //is it working? no. it is not. :(
 console.log("Your Score: " + yourScore);
};
//main process

//starts the game the first time.

    

startGame();

$("#purple").click(function() {
   addValues(crystal.purple);
  
});

$("#green").click(function() {
   addValues(crystal.green);
});

$("#orange").click(function() {
   addValues(crystal.orange);
});

$("#star").click(function() {
   addValues(crystal.star);
});
});


