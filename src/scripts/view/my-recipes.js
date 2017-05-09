// jshint esversion:6

export function showList(state) {
  const $myRecipes = $('#my-recipes-page');
  let html = '';

  $.each(state.myRecipes, function(index, recipeObj) {
    html += '<li class="list-group-item my-recipe-list-item">' +
    '<h3>'+recipeObj.title+'</h3>'+
    '<div>' +'<span>'+'<span class="glyphicon-time glyphicon"></span>'+recipeObj.readyInMinutes+'</span>'+
    '<button class="edit-recipe btn btn-default">Edit</button>'+
    '<button class="delete-recipe btn btn-default">Delete</button></li>';
  });
  $myRecipes.find('ul').html(html);

}
