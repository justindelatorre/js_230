// https://launchschool.com/lessons/519eda67/assignments/1753933a
// https://codepen.io/launchschool/pen/BmVVbJ

let elem1 = document.querySelector('#elem1');
let elem4 = document.querySelector('#elem4');

// Set useCapture to true to prevent listening on both bubbling and capturing
elem1.addEventListener('click', event => alert(event.currentTarget.id), true);
elem4.addEventListener('click', event => alert(event.currentTarget.id));
