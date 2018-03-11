
// char[] alphabet 

// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var guessedLetters = [];
// var hiddenLetter = alphabet[0]



// var guessesLeft = 10;
// var userGuess = []
// var randWord;

// var wins = 0;
// var losses = 0;

var userKeyPress
var answer;
var displayAnswer;
var answerBuffer;
var i;
var j;
var guessesLeft;
var toGo;
var cookiePlayed ="harry_hangman_played";
var cookieWon = "harry_hangman_won";
AnswerArray = new Array();

function Pair(value, category) {
    this.value=value;
    this.category=category;
}

// Places

AnswerArray[0]=new Pair("THE  BURROW","Place");
AnswerArray[1]=new Pair("GODRICS  HOLLOW","Place");
AnswerArray[2]=new Pair("LITTLE  HANGLETON","Place");
AnswerArray[3]=new Pair("LITTLE  WHINGING","Place");
AnswerArray[4]=new Pair("MALFOY  MANOR","Place");
AnswerArray[5]=new Pair("GRIMMAULD  PLACE","Place");
AnswerArray[6]=new Pair("SHELL  COTTAGE","Place");

// Characters
AnswerArray[7]=new Pair("HARRY  POTTER","Character");
AnswerArray[8]=new Pair("RON  WEASLEY","Character");
AnswerArray[9]=new Pair("HERMIONE  GRANGER","Character");
AnswerArray[10]=new Pair("ALBUS  DUMBLEDORE","Character");
AnswerArray[11]=new Pair("RUBEUS  HAGRID","Character");
AnswerArray[12]=new Pair("PROFESSOR  SNAPE","Character");
AnswerArray[13]=new Pair("VOLDEMORT","Character");
AnswerArray[14]=new Pair("SIRIUS  BLACK","Character");
AnswerArray[15]=new Pair("DRACO  MALFOY","Character");
AnswerArray[16]=new Pair("FRED  WEASLEY","Character");
AnswerArray[17]=new Pair("REMUS  LUPIN","Character");
AnswerArray[18]=new Pair("GEORGE  WEASLEY","Character");
AnswerArray[19]=new Pair("NEVILLE  LONGBOTTOM","Character");
AnswerArray[20]=new Pair("ARTHUR  WEASLEY","Character");
AnswerArray[21]=new Pair("GINNY  WEASLEY","Character");
AnswerArray[22]=new Pair("PROFESSOR  MCGONAGALL","Character");
AnswerArray[23]=new Pair("MOLLY  WEASLEY","Character");
// Objects

AnswerArray[24]=new Pair("ENCHANTED  COINS","Magical Object");
AnswerArray[25]=new Pair("HOWLER","Magical Object");
AnswerArray[26]=new Pair("DELUMINATOR","Magical Object");
AnswerArray[27]=new Pair("WAND","Magical Object");
AnswerArray[28]=new Pair("INVISIBILITY  CLOAK","Magical Object");
AnswerArray[29]=new Pair("DOXY","Magical Object");
AnswerArray[30]=new Pair("DRAGON","Magical Object");


// document.onkeyup = function(event) {
      
//     var userKeyPress = event.key;

// }


function gamePlay () {
    var overlay =
    function StartUp(){
        var overlay = document.getElementById('overlay');
        if ( overlay.className != 'hidden' ) {
            overlay.className = 'hidden';
        }
        var iarray;
    
        iarray=Math.floor(Math.random()*AnswerArray.length);
        answer=AnswerArray[iarray].value;
        displayanswer="";
        for(i=0;i<answer.length;i++){
            if(answer.charAt(i)==" ") {
                displayanswer=displayanswer+" ";
            } else  {
                displayanswer=displayanswer+"_";
            }
        }
    
        document.Hang.DisplayedAnswer.value=displayanswer;
        document.Hang.Catagory.value=AnswerArray[iarray].catagory;
        
        document.Hang.UsedLetters.value="";
    
        guessesLeft=0;
        togo=0;
        for(j=0;j<answer.length;j++){
            if(displayanswer.charAt(j)=="_") togo+=1;
        }
    
    
    }
    



}


function Letter(character){
	var flag=1;
	for(i=0;i<answer.length;i++){
		if(answer.charAt(i)==character){
			flag=0;
			if(i==0) displayanswer=character+displayanswer.substring(i+1,answer.length);
			else if(i==answer.length-1)displayanswer=displayanswer.substring(0,i)+character;
			else displayanswer=displayanswer.substring(0,i)+character+displayanswer.substring(i+1,answer.length);
			document.Hang.DisplayedAnswer.value=displayanswer;

			togo=0;
			for(j=0;j<answer.length;j++){
				if(displayanswer.charAt(j)=="_") togo+=1;
            }
            
            var total = $.cookie(cookiePlayed);
            total++;
            $.cookie(cookiePlayed, total);
            var wontotal = $.cookie(cookieWon);
            wontotal++;
            $.cookie(cookieWon, wontotal);
            var lost = total-wontotal;
            $('.won').text(wontotal);
            $('.lost').text(lost);
            $('.played').text(total);
            
            var randwintext = wintext[Math.floor(Math.random()*wintext.length)];
            $('#overlay .overlaywrap').text(randwintext);
            
        }
		}
	}
