const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

  //const firstItem = document.createElement();

  ingredients.forEach(function (element, index) {
    const firstItem = document.createElement("li");
    firstItem.textContent = element;
    console.log(element);
    list.append(firstItem);
  });


//list.prepend(firstItem);
