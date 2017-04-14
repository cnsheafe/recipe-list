// jshint esversion:6

export function renderPage() {
  $('main').find('.viewable').addClass('hide');
  $('main').find('.viewable').removeClass('viewable');
  $('#new-recipe-page').removeClass('hide');
  $('#new-recipe-page').addClass('viewable');
}

export function renderNewListItem(element, keyPressed) {
  if(keyPressed === 'Enter') {
    element.after('<li><input type="text" placeholder="new item"></li>');
  }
}

export function addRecipe(state) {
  let title = $('#recipe-title').val();
  let time = $('#ready-in-mins').val();
  let ingredients = [];
  $('#ingredients').find('input').each(
    (index, element) => ingredients.push($(element).val())
  );

  let steps = [];
  $('#steps').find('input').each(
    (index, element) => steps.push($(element).val())
  );

  state.myRecipes.push({
    title: title,
    readyInMinutes: time,
    listofIngredients: ingredients,
    instructions: steps
  });
}
