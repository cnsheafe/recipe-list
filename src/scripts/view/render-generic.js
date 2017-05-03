// jshint esversion:6
// Is used on more than one 'page'
export function showRecipe($selector, recipe) {
  console.log(recipe);
  let recipeInfo ='<span><h1>'+
    recipe.title+'</h1>'+
    '<h2>'+recipe.readyInMinutes+' minutes</h2></span>'+
    '<h3>Ingredients</h3><ul>';
  $.each(recipe.listofIngredients, function(ind, obj) {
    recipeInfo += '<li><input type="checkbox">'+obj.amount+
    ' '+obj.name+'</li>';
  });
  recipeInfo += '</ul><h3>Directions</h3><ol>';
  $.each(recipe.instructions, function(ind,val) {
    recipeInfo += '<li>'+val+'</li>';
  });
  recipeInfo += '</ol>';

  $selector.html(recipeInfo);
}

export function switchView($pageView) {
  $('#new-recipe-page').addClass('hide');
  $('#search-page').addClass('hide');
  $('#my-recipes-page').addClass('hide');
  $('#single-recipe-page').addClass('hide');
  $pageView.removeClass('hide');
}
