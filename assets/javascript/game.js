var wins = 0;       
var losses = 0;

function gamePlay() {

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var places = ["the burrow", "malfoy manor", "shell cottage", "godrics hollow", "little hangleton"]
var characters = ["harry potter", "remus lupin", "molly weasly", "hermione granger", "voldemort"]
var magicalCreatures = ["dragon", "howler", "deluminator", "marauders map", "doxy"]

var harryPotter = ['Places','Characters','Magical Creatures'];        // Array of topics (Categories)
var chosenCategory;     // Selected catagory
var word ;              // Selected word
var space;              // Number of spaces in word '-'
var counter

        
var userGuess;             // Guess....   (guessed-letter)
var guessedLetters = [];      // Stored geusses.... (used-letters)
var guessesLeft = 10;             // Lives.... (guesses-left)
// var hiddenAnswer = alphabet[1];

// Get Elements


var showCatagory = document.getElementById("scatagory");
var showClue = document.getElementById("clue")


// create alphabet ul but with Keys
var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
// Keys
document.onkeyup = function(event) {

    userGuess = event.key;

    document.getElementById('guessed-letter').textContent = userGuess;
    
    if(guessedLetters.indexOf(userGuess) === -1) {
        guessedLetters.push(userGuess);
        if(userGuess === hiddenAnswer) {
          wins++;
          document.getElementById('won').textContent = wins;
          gamePlay();
        } else if (guessesLeft === 0) {
          losses++;
          document.getElementById('lost').textContent = losses;
          gamePlay();
        }  else {
          guessesLeft--;
          document.getElementById('used-letters').textContent = guessedLetters;
          document.getElementById('guesses-left').textContent = guessesLeft;
        }
      }
  
    };




// Select Catagory
var selectCat = function () {
    if (chosenCategory === harryPotter[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Places";
    } else if (chosenCategory === harryPotter[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Characters";
    } else if (chosenCategory === harryPotter[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Magical Creatures";
    }
  }


  // Create guesses ul
  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      userGuess = document.createElement('li');
      userGuess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        userGuess.innerHTML = "-";
        space = 1;
      } else {
        userGuess.innerHTML = "_";
      }

      guessedLetters.push(userGuess);
      wordHolder.appendChild(correct);
      correct.appendChild(userGuess);
    }
  }
  

    



// OnClick Function
check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guessedLetters[i].innerHTML = geuss;
          wins += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        guessesLeft -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


 // Play
 play = function () {
    harryPotter = [
        ["the burrow", "malfoy manor", "shell cottage", "godrics hollow", "little hangleton"],
        ["harry potter", "remus lupin", "molly weasly", "hermione granger", "voldemort"],
        ["dragon", "howler", "deluminator", "marauders map", "doxy"]
    ];

    chosenCategory = harryPotter[Math.floor(Math.random() * harryPotter.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    

    buttons();

    geusses = [ ];
    // guessesLeft = 10;
    // wins = 0;
    space = 0;
    result();
    // comments();
    selectCat();
    canvas();
  }

  play();
  
  


// Reset
  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }

}
  


console.log(gamePlay())