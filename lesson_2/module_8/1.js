// https://launchschool.com/lessons/519eda67/assignments/068d60f5
// https://codepen.io/launchschool/pen/BQoBox

// Add event listener to document object that listens for a click
document.addEventListener('click', event => {
  // Get element with class "x"
  let x = document.querySelector('.x');
  // Set the left position style property to the x-position where
  // the click occurred
  x.style.left = String(event.clientX) + 'px';
  // Set the top position style property to the y-position where the click
  // occurred
  x.style.top = String(event.clientY) + 'px';
});
