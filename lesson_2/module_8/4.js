// https://launchschool.com/lessons/519eda67/assignments/068d60f5
// https://codepen.io/launchschool/pen/LbNWRJ

// Add event listener waiting for DOM to load
document.addEventListener('DOMContentLoaded', event => {
  // Get individual elements that will be used
  let composer = document.querySelector('.composer');
  let textarea = composer.querySelector('textarea');
  let counter = composer.querySelector('.counter');
  let button = composer.querySelector('button');
  
  // Define function that tracks number of characters left and disables the
  // 'Post Message' button if too many characters are present
  const updateCounter = () => {
    let length = textarea.value.length;
    let remaining = 140 - length;
    let message = `${remaining.toString()} characters remaining`;
    let invalid = remaining < 0;
    
    textarea.classList.toggle('invalid', invalid);
    button.disabled = invalid;
    
    counter.textContent = message;
  }
  
  // Add event listener to textarea element that updates counter on keyup
  // events
  textarea.addEventListener('keyup', updateCounter);

  // Invoke updateCounter function to execute on successful DOM load
  updateCounter();
});
