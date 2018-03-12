var wins = 0;
var losses = 0;
var space = [];
var activeItem;
function gamePlay() {

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
// var places = ["the burrow", "malfoy manor", "shell cottage", "godrics hollow", "little hangleton"];
// var characters = ["harry potter", "remus lupin", "molly weasly", "hermione granger", "voldemort"];
// var magicalCreatures = ["dragon", "howler", "deluminator", "marauders map", "doxy"];
var myButtons;
var letters;
var harryPotter = ['Places','Characters','Magical Creatures'];        // Array of topics (Categories)
var chosenCategory;     // Selected catagory
var hiddenWord;              // Selected word
      // Number of spaces in word '-'
var counter;
var list;

var userGuess;             // Guess....   (guessed-letter)
var guessedLetters = [];      // Stored geusses.... (used-letters)
var guessesLeft = 10;             // Lives.... (guesses-left)
var hiddenAnswer = alphabet[1];

// Get Elements


var showCatagory = document.getElementById("scatagory");
var showClue = document.getElementById("clue");


// create alphabet ul but with Keys
var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
    letters.id = 'alphabet';

    for (var i = 0; i < alphabet.length; i++) {
      list = document.createElement('li');
      list.className = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

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

    for (var i = 0; i < hiddenWord.length; i++) {
      correct.setAttribute('class', 'my-word');
      userGuess = document.createElement('li');
      userGuess.setAttribute('class', 'guess');
      if (hiddenWord[i] === "-") {
        userGuess.innerHTML = "-";

      } else {
        userGuess.innerHTML = "_";
      }
      wordHolder.appendChild(correct);
      correct.appendChild(userGuess);
    }
  }






// OnClick Function
var check = function () {
    list.onclick = function () {

      var letter = this.textContent;
      if(guessedLetters.indexOf(letter) == -1) {
        if(activeItem != undefined) {
          activeItem.classList = "letter";
        } else {
          activeItem
        }
        activeItem = this;
        activeItem.classList.add('active');
        guessedLetters.push(letter);
        document.getElementById('guessed-letter').textContent = letter;
        if(guessesLeft == 0) {
          lose();
        }
        guessesLeft--;
        document.getElementById('guesses-left').textContent = guessesLeft;
        document.getElementById('used-letters').textContent = guessedLetters;
        console.log(this);
        var geuss = (this.innerHTML);

        // this.onclick = null;

        for (var i = 0; i < hiddenWord.length; i++) {
          if (hiddenWord[i] === geuss) {
            space[i] = geuss;
          }
        }
        document.getElementById('hold').textContent = space.join(" ");
        if (space.join() === hiddenWord) {
          win();
        }
      }
    };
  };

var lose = function() {
  losses++;
  document.getElementById('lost').textContent = losses;
  play();
};

var win = function() {
  wins++;
  document.getElementById('wins').textContent = losses;
  play();
};


 // Play
 var play = function () {
  
    harryPotter = [
        ["the burrow", "malfoy manor", "shell cottage", "godrics hollow", "little hangleton"],
        ["harry potter", "remus lupin", "molly weasly", "hermione granger", "voldemort"],
        ["dragon", "howler", "deluminator", "marauders map", "doxy"]
    ];

    chosenCategory = harryPotter[Math.floor(Math.random() * harryPotter.length)];
    hiddenWord = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    hiddenWord = hiddenWord.replace(/\s/g, "-");
    console.log(hiddenWord);
    
    for(var i = 0; i < hiddenWord.length; i++) {
      
      space.push("-");

    };






    buttons();

    guessedLetters = [ ];
    // guessesLeft = 10;
    // wins = 0;

    result();
    // comments();
    selectCat();

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



console.log(gamePlay());
