const allCat = document.querySelectorAll(".item");
console.log(`Number of categories: ` + allCat.length);

const categoriesArray = [...allCat]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length} \n`
  )
  .join("\n");
console.log(categoriesArray);