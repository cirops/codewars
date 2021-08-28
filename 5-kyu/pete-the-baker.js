//https://www.codewars.com/kata/525c65e51bf619685c00005

function cakes(recipe, available) {
  const result = [];
  let ingredientsMissing = false;
  Object.entries(recipe).forEach((ing) => {
    if (!available[ing[0]]) {
      ingredientsMissing = true;
    }
    result.push(Math.floor(available[ing[0]] / ing[1]));
  });
  return ingredientsMissing ? 0 : Math.min(...result);
}
