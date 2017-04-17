// jshint esversion:6

export function showList(state) {
  const $myRecipes = $('#my-recipes-page');
  let html = '';

  $.each(state.myRecipes, function(index, recipeObj) {
    html += '<li class="my-recipe-list-item">' + recipeObj.title + ' ' + recipeObj.readyInMinutes +
    '<button class="edit-recipe">Edit</button>'+
    '<button class="delete-recipe">Delete</button></li>';
  });
  $myRecipes.find('ul').html(html);

}
