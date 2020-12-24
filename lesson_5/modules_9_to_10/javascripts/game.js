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
    guesses: 6,
    createBlanks() {
      let spaces = (new Array(this.word.length + 1)).join('<span></span>');

      let spans = letters.querySelectorAll('span');
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
      letters.insertAdjacentHTML('beforeend', spaces);
      this.spaces = document.querySelectorAll('#spaces span');
    },
    fillBlanksFor(letter) {
      let self = this;

      this.word.forEach((l, i) => {
        if (letter === l) {
          self.spaces[i].textContent = letter;
          self.correctSpaces++;
        }
      });
    },
    emptyGuesses() {
      let spans = guesses.querySelectorAll('span');
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
    },
    renderGuess(letter) {
      let span = document.createElement('span');
      span.textContent = letter;
      guesses.appendChild(span);
    },
    renderIncorrectGuess(letter) {
      this.incorrect++;
      this.renderGuess(letter);
      this.setClass();
    },
    duplicateGuess(letter) {
      let duplicate = this.lettersGuessed.indexOf(letter) !== -1;
      if (!duplicate) {
        this.lettersGuessed.push(letter);
      }
    },
    setClass() {
      apples.classList.remove(...apples.classList);
      apples.classList.add('guess_' + this.incorrect);
    },
    displayMessage(text) {
      $message.text(text);
    },
    showReplayLink() {
      replay.classList.add('visible');
    },
    hideReplayLink() {
      replay.classList.remove('visible');
    },
    processGuess(e) {
      let letter = e.key;
      if (notALetter(letter)) {
        return;
      }
      if (this.duplicateGuess(letter)) {
        return;
      }

      if (this.word.includes(letter)) {
        this.fillBlanksFor(letter);
        this.renderGuess(letter);

        if (this.correctSpaces === this.spaces.length) {
          this.win();
        }
      } else {
        this.renderIncorrectGuess(letter);
      }
      if (this.incorrect === this.guesses) {
        this.lose();
      }
    },
    win() {
      this.unbind();
      this.displayMessage("Sorry! You're out of guesses.");
      this.showReplayLink();
      this.setGameStatus('lose');
    },
    setGameStatus(status) {
      document.body.classList.remove('win', 'lose');
      if (status) {
        document.body.classList.add(status);
      }
    },
    bind() {
      this.processGuessHandler = (e) => this.processGuess(e);
      document.addEventListener('keyup', this.processGuessHandler);
    },
    unbind() {
      document.removeEventListener('keyup', this.processGuessHandler);
    },
    init() {
      this.bind();
      this.setClass();
      this.hideReplayLink();
      this.emptyGuesses();
      this.createBlanks();
      this.setGameStatus();
      this.displayMessage('');
    }
  };

  const notALetter = () => {
    return letter < 'a' || letter > 'z';
  };

  new Game();

  replay.addEventListener('click', event => {
    e.preventDefault();
    new Game();
  });
});
