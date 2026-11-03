//global variables here: word, word array(s), guesses, guessedLetters
// TODO: deduct from guesses, check for a win or loss.

let word = "";
let guesses = 6;
let guessedLetters = [];

//event listeners for startGame and guessLetter
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("guessLetter").addEventListener("click", guessLetter);
buildSelector()
//once at start of the game
function startGame() {
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = "";
    guesses = 6;
    document.getElementById("numGuesses").innerHTML = guesses;
    word = WORDS[Math.floor(Math.random() * WORDS.length)];
    // console.log(word);
    printWord();
}

//at start and every time the user enters a guess
function printWord() {
    let displayedWord = "";
    for(let i = 0; i < word.length; i++) {
        if(guessedLetters.includes(word[i])) {
            displayedWord += word[i];
        } else {
            displayedWord += "_";
        }
        displayedWord += " ";
    }
    document.getElementById("word").innerHTML = displayedWord;
    if(displayedWord.replace(/\s/g, "") == word && !(word == "")) {
        alert("You win!");
    }
/*
Compare each letter in answer word to the letters in guessedLetters using guessedLetters.indexOf(letter).  Use this to build the “_” word with the correctly guessed letters filled in.
there is a help video for this in classroom 
*/

}

//every time the user enters a guess
function guessLetter() {
    let l = document.getElementById("guessedLetter").value
    if(!guessedLetters.includes(l) && guesses > 0) {
        // console.log(l)
        guessedLetters.push(l);
        document.getElementById("guessedLetters").innerHTML = String(guessedLetters.toSorted()).replace(/\b,\b/g, ", ");
        printWord();
        if(!word.includes(l)) {
            guesses -= 1;
            if(guesses == 0) {
                alert("You lose! The word was " + word);
            }
        }
        document.getElementById("numGuesses").innerHTML = guesses;
    }
}

function buildSelector() {
    document.getElementById("guessedLetter").innerHTML = '<option value="a">a</option>  <option value="b">b</option>  <option value="c">c</option>  <option value="d">d</option>  <option value="e">e</option>  <option value="f">f</option>  <option value="g">g</option>  <option value="h">h</option>  <option value="i">i</option>  <option value="j">j</option>  <option value="k">k</option>  <option value="l">l</option>  <option value="m">m</option>  <option value="n">n</option>  <option value="o">o</option>  <option value="p">p</option>  <option value="q">q</option>  <option value="r">r</option>  <option value="s">s</option>  <option value="t">t</option>  <option value="u">u</option>  <option value="v">v</option>  <option value="w">w</option>  <option value="x">x</option>  <option value="y">y</option>  <option value="z">z</option>'
}

// async function loadTextFile() {
//     try {
//         // Fetch the file relative to the server root
//         const response = await fetch('words.txt');
        
//         // Check if the server returned a successful status (200-299)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         // Read the response stream as plain text
//         const textData = await response.text();
//         words = textData.split("\n");

//     } catch (error) {
//         console.error('Error fetching the text file:', error);
//     }
// }

// loadTextFile();