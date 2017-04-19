// jshint esversion:6

export function showList(state) {
  const $myRecipes = $('#my-recipes-page');
  let html = '';

  $.each(state.myRecipes, function(index, recipeObj) {
    html += '<li class="my-recipe-list-item">' +
    '<h2>'+recipeObj.title+'</h2>'+
    '<div>' +'<span>'+recipeObj.readyInMinutes+' mins</span>'+
    '<button class="edit-recipe">Edit</button>'+
    '<button class="delete-recipe">Delete</button></li>';
  });
  $myRecipes.find('ul').html(html);

}
