const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

  ingredients.forEach(function (element) {
    const firstItem = document.createElement("li");
    firstItem.textContent = element;
    console.log(element);
    list.append(firstItem);
  });

