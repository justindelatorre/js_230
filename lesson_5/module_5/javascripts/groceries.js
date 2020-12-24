(function groceryListManager() {
  class GroceryList {
    constructor(listContainerElement) {
      this.list = document.querySelector(listContainerElement);
    }

    addItem(itemName, itemQuantity) {
      var listItem = document.createElement('li');
      listItem.append(`${itemQuantity} ${itemName}`);

      this.list.append(listItem);
    }
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    let form = document.querySelector('form');
    let myGroceryList = new GroceryList('#grocery-list');
    const getValueOf = (selector) => form.querySelector(selector).value;

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      let itemName = getValueOf('#name');
      let itemQuantity = getValueOf('#quantity') || '1';

      myGroceryList.addItem(itemName, itemQuantity);
      form.reset();
    });
  });
})();
