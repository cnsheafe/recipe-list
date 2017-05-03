// jshint esversion:6
export function storeResults(apiResult, state) {
  state.resultList = apiResult.results;
  state.sessionResults.push({
    currentQuery: state.currentQuery,
    baseUri: apiResult.baseUri
  });
  state.baseImgUri = apiResult.baseUri;
}

export function simplifyRecipe(recipeObj) {
  /*Refer to 'get-recipe-info-sample-response.json' for recipeObj's complete structure*/
  let ingredients = [];
  $.each(recipeObj.extendedIngredients, function(ind, obj) {
    ingredients.push({
      name: obj.name,
      amount: obj.amount + obj.unitLong
    });
  });
  let steps = [];
  if (typeof recipeObj.analyzedInstructions[0] !== 'undefined') {
    $.each(recipeObj.analyzedInstructions[0].steps, function(ind, obj) {
      steps.push(obj.step);
    });
  }
  return {
    title: recipeObj.title,
    readyInMinutes: recipeObj.readyInMinutes,
    listofIngredients: ingredients,
    instructions: steps
  };
}
