// jshint esversion:6
export function makeResultsList(resultObj, state) {
  let recipeId = '';
  state.resultList = [];
  $.each(resultObj.Recipes, function(ind, obj) {
    recipeId = obj.link.split('-').pop();

    state.resultList.push({
      title: obj.name,
      imgUrl: obj.image,
      id: recipeId
    });
  });
}

export function renderResultsList(state){
  let previewHtml = '';
  $.each(state.resultList, function(ind, obj) {
    previewHtml += '<li data-recipeid="'+obj.id+'"><a>'+
    '<img src="'+obj.imgUrl+'" alt="'+obj.title+'">'+
    '<span>'+obj.title+'</span>'+
    '<form><input type="submit"></form>'+
    '</li></a>';
  });
  $('#search-results').html(previewHtml);
}

export function simplifyRecipeDetails(recipeObj) {
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
    time: recipeObj.readyInMinutes,
    listofIngredients: ingredients,
    instructions: steps
  };
}
