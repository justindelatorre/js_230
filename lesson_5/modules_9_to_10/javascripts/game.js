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

  function Game() {
    this.incorrect = 0;
    this.lettersGuessed = [];
    this.correctSpaces = 0;
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return this;
    }
    this.word = this.word.split('');
    this.init();
  }

  Game.prototype = {
    createBlanks() {
      let spaces = (new Array(this.word.length + 1)).join('<span></span>');

      let spans = letters.querySelectorAll('span');
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
      letters.insertAdjacentHTML('beforeend', spaces);
      this.spaces = document.querySelectorAll('#spaces span');
    },
    displayMessage(text) {
      $message.text(text);
    },
    init() {
      this.createBlanks();
    }
  };

  new Game();
});
