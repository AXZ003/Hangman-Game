var wins = 0;
var losses = 0;
var space = [];
var activeItem;
var categoryArray = [];
var hangman = false;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'," "];
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
var guessedLetters = [];      // Stored guesses.... (used-letters)
var guessesLeft = 10;             // Lives.... (guesses-left)



function gamePlay() {

  hangman = true;
  guessedLetters =[];
  guessesLeft = 10;
  space = [];
  


}

var showCatagory = document.getElementById("scatagory");
var showClue = document.getElementById("clue");


// create alphabet ul but with Keys
var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
    letters.id = 'alphabet';

    for (var i = 0; i < alphabet.length; i++) {
      list = document.createElement('li');
      document.getElementById('hold').innerHTML = list;
      list.className = 'letter';
      console.log(list.className = 'letter');
      list.innerHTML = alphabet[i];
      console.log(list.innerHTML = alphabet[i]);
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

// Keys
// document.onkeyup = function(event) {

//     userGuess = event.key.toLowerCase();

//     document.getElementById('guessed-letter').textContent = userGuess;

//     if(guessedLetters.indexOf(userGuess) === -1) {
//         guessedLetters.push(userGuess);
//         if(userGuess === hiddenWord) {
//           wins++;
//           document.getElementById('won').textContent = wins;
//           gamePlay();
//         } else if (guessesLeft === 0) {
//           losses++;
//           document.getElementById('lost').textContent = losses;
//           gamePlay();
//         }  else if (hiddenWord.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0 ) 
//         {
//           guessedLetters.push(userGuess);
//           guessesLeft--;
//           document.getElementById('used-letters').textContent = guessedLetters;
//           document.getElementById('guesses-left').textContent = guessesLeft;
//         }
//       }

//     };




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
      letter = document.createElement('li');
      letter.setAttribute('class', 'guess');
      if (hiddenWord[i] === " ") {
        letter.innerHTML = " ";
        space.push(" ");

      } else {
        letter.innerHTML = "_";
        space.push("_")
      }
      wordHolder.appendChild(correct);
      correct.appendChild(letter);
    }
  }



// OnClick Function
var check = function () {
    list.onclick = function () {

      var letter = this.textContent;
      console.log(this.textContent);

      if(guessedLetters.indexOf(letter) === -1) {
        // guessedLetters.push(letter);

        if(letter === hiddenWord) {
          // wins++;
          // document.getElementById('won').textContent=wins;
          win();
          gamePlay();
        }  else if(guessesLeft === 0) {
          // losses++;
          // document.getElementById('lost').textContent=losses;
          lose();
          gamePlay();
        }  else if (hiddenWord.indexOf(letter) < 0 && alphabet.indexOf(letter)>= 0) {

        guessedLetters.push(letter);
        guessesLeft--;
        document.getElementById('guesses-left').textContent = guessesLeft;
        document.getElementById('used-letters').textContent = guessedLetters;

        } if(activeItem != undefined) {
          activeItem.classList = "letter";
        } else {
          activeItem
        }
        activeItem = this;
        activeItem.classList.add('active');
        // guessedLetters.push(letter);
        document.getElementById('guessed-letter').textContent = letter;

       
       
        var guess = (this.innerHTML);
       
        // this.onclick = null;
        for (var i = 0; i < hiddenWord.length; i++) {
          if (hiddenWord[i] === guess) {
            space[i] = guess;
          }
        }
        document.getElementById('hold').textContent = space.join(" ");
        if (space.join() === hiddenWord) {
          win();
         }
      }
    }
  }

  function gamePoints () {

    if (hiddenWord === categoryArray.join(""))
    wins++;
    document.getElementById('wins').textContent = won;
    hiddenWord[i+1];
    categoryArray = [];
    play();
    gameReset();


  }

var lose = function() {
  losses++;
  document.getElementById('lost').textContent = losses;
  play();
};

var win = function() {
  wins++;
  document.getElementById('wins').textContent = wins;
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
    hiddenWord = hiddenWord.replace(/\s/g," ");
    console.log(hiddenWord);
    
    for(var i = 0; i < hiddenWord.length; i++) {
      
      space.push("_");
      console.log(space)

    };






    buttons();

    guessedLetters = [ ];
    guessesLeft = 10;
    wins = 0;

    result();
    selectCat();

  }

  play();
  // gamePlay();





// Reset

function gameReset () {


  hangman = true;
  guessedLetters =[];
  guessesLeft = 10;
  space = [];


  function onclick() {
  document.getElementById('reset').reset();
  gamePlay()

  }
  
  // onclick = function() {
  //   correct.parentNode.removeChild(correct);
  //   letters.parentNode.removeChild(letters);
  //   context.clearRect(0, 0, 400, 400);
  //   play();
  // }


}
  







console.log(gamePlay());
