//global variables here: word, word array(s), guesses, guessedLetters

let word;
let guesses = 0;
let guessedLetters = [];

//event listeners for startGame and guessLetter
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("guessLetter").addEventListener("click", guessLetter);

//once at start of the game
function startGame() {
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = "";
    word = WORDS[Math.floor(Math.random() * WORDS.length)];
    console.log(word);
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
/*
Compare each letter in answer word to the letters in guessedLetters using guessedLetters.indexOf(letter).  Use this to build the “_” word with the correctly guessed letters filled in.
there is a help video for this in classroom 
*/

}

//every time the user enters a guess
function guessLetter() {
    let l = document.getElementById("guessedLetter").value
    if(!guessedLetters.includes(l)) {
        console.log(l)
        guessedLetters.push(l);
        document.getElementById("guessedLetters").innerHTML = String(guessedLetters.toSorted()).replace(/\b,\b/g, ", ");
        printWord();
    }
/*
Manage the game: Add letters to guessedLetters, call printWord, deduct from guesses, check for a win or loss.
*/

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