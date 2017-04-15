// jshint esversion:6

export function render(state) {
  $('#new-recipe-page').addClass('hide');
  $('#search-page').addClass('hide');

  let $myRecipes = $('#my-recipes-page');
  $myRecipes.removeClass('hide');

  let html = '';
  $.each(state.myRecipes, function(index, recipeObj) {
    html += '<li class="my-recipe-list-item">' + recipeObj.title + ' ' + recipeObj.readyInMinutes + '</li>';
  });
  $myRecipes.find('ul').html(html);

}
