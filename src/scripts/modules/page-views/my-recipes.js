// jshint esversion:6

export function showList(state) {
  let $myRecipes = $('#my-recipes-page');
  let html = '';

  $.each(state.myRecipes, function(index, recipeObj) {
    html += '<li class="my-recipe-list-item">' + recipeObj.title + ' ' + recipeObj.readyInMinutes + '</li>';
  });
  $myRecipes.find('ul').html(html);

}
