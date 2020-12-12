// https://launchschool.com/exercises/93c57c33

const makeBold = (element, callback) => {
  element.style.fontWeight = 'bold';
  
  if (callback && typeof callback === 'function') {
    callback(element);
  }
};
