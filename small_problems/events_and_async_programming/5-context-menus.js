// https://launchschool.com/exercises/b4bcd2a0

let main = document.querySelector('main');
let sub = main.querySelector('#sub');

main.addEventListener('contextmenu', e => {
  e.preventDefault();
  alert('Main');
});

sub.addEventListener('contextmenu', e => {
  e.preventDefault();
  e.stopPropagation();
  alert('Sub');
});
