// jshint esversion:6
// Is used on more than one 'page'
export function showRecipe($selector, recipe) {
  console.log(recipe);
  let recipeInfo =
    `<div class="recipe-header row">
      <div class="col-xs-8 col-xs-offset-2">
        <h2>${recipe.title}</h2>
        <span class="glyphicon glyphicon-time"></span>
        <span>${recipe.readyInMinutes}</span>
      </div>
    </div>
    <div class="row">
      <h3 class="col-xs-8 col-xs-offset-2">Ingredients</h3>
      <ul class="col-xs-8 col-xs-offset-2 input-group list-group">`;

  $.each(recipe.listofIngredients, function(ind, ingredient) {
    recipeInfo +=
      `<li class="list-group-item row">
        <input type="checkbox" class="col-xs-1">
        <span class="col-xs-10">
          ${ingredient.amount} ${ingredient.name}
        </span>
      </li>`;
  });
  recipeInfo +=
    `</ul></div>
    <div class="row">
      <h3 class="col-xs-8 col-xs-offset-2">Directions</h3>
      <ol class="col-xs-8 col-xs-offset-2 input-group list-group">`;
  $.each(recipe.instructions, function(ind,val) {
    recipeInfo +=
    `<li class="list-group-item row">
      <input type="checkbox" class="col-xs-1">
      <span class="col-xs-10">
        ${val}
      </span>
    </li>`;
  });
  recipeInfo += '</ol></div>';

  $selector.html(recipeInfo);
}

export function switchView($pageView) {
  $('#search-page').addClass('hide');
  $('#new-recipe-page').addClass('hide');
  $('#my-recipes-page').addClass('hide');
  $('#single-recipe-page').addClass('hide');
  $pageView.removeClass('hide');
}

export function switchActiveTab($tab) {
  $('#search-for-recipes').removeClass('active');
  $('#create-recipe').removeClass('active');
  $('#my-recipes').removeClass('active');
  $tab.addClass('active');
}
