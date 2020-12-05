// https://launchschool.com/lessons/519eda67/assignments/068d60f5
// https://codepen.io/launchschool/pen/BQoBox

// Add event listener to document object that listens for mouse movement
document.addEventListener('mousemove', event => {
  // Get element with class "x"
  let x = document.querySelector('.x');
  // Set the left position style property to the x-position where
  // the click occurred
  x.style.left = String(event.clientX) + 'px';
  // Set the top position style property to the y-position where the click
  // occurred
  x.style.top = String(event.clientY) + 'px';
});

// Add event listener to document object that listens for key up movement
document.addEventListener('keyup', event => {
  let key = event.key;
  let color;
 
  // Set color depending on value of key 
  if (key === 'r') {
    color = 'red';
  } else if (key === 'g') {
    color = 'green';
  } else if (key === 'b') {
    color = 'blue';
  }
  
  // If a color value is assigned, apply color to all child elements
  // of the element with class "x"
  if (color) {
    let x = document.querySelector('.x');
    for (let i = 0; i < x.children.length; i += 1) {
      let child = x.children[i];
      child.style.background = color;
    }
  }
});
