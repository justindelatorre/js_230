document.addEventListener('DOMContentLoaded', event => {
  const message = document.querySelector('#message');
  const letters = document.querySelector('#spaces');
  const guesses = document.querySelector('#guesses');
  const apples = document.querySelector('#apples');
  const replay = document.querySelector('#replay');

  const randomWord = function() {
    let words = ['apple', 'banana', 'orange', 'pear'];

    return function() {
      let idx = Math.floor(Math.random() * words.length);
      let word = words[idx];
      words = words.slice(0, idx).concat(words.slice(idx + 1));
      return word;
    };
  }();

  let Game = function() {
    this.word = '';
    this.countIncorrectGuesses = 0;
    this.lettersGuessed = [];
    this.countAllowedGuesses = 6;
  };

  // BEHAVIOR:
  // Choose a word from the words array for the current game. If all words are
  //   chosen, then show "Sorry, I've run out of words!"
  Game.prototype.chooseCurrentWord = () => {
    let word = randomWord();
    if (word) {
      this.word = word;
    } else {
        console.log("Sorry, I've run out of words!");
    }
  };

  // Initialize blanks in the "Word: " container, the amount of which is equal
  //   to the length of the chosen word
  Game.prototype.initializeWordDisplay = () => {
    let length = this.word.length;
    this.wordDisplay = new Array(length).fill('_');
  };
});
