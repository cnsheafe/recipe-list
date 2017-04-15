// jshint esversion:6

export function renderPage() {
  const $main = $('main');
  const $newRecipe = $('#new-recipe-page');
  $main.find('.viewable').addClass('hide');
  $main.find('.viewable').removeClass('viewable');
  $newRecipe.removeClass('hide');
  $newRecipe.addClass('viewable');
}

export function renderNewListItem($element, keyPressed) {
  if(keyPressed === 'Enter') {
    $element.after('<li>'+
    '<input type="text" class="ingredient-name" placeholder="new item">'+
    '<input type="text" class="ingredient-amount" placeholder="amount">'+
    '</li>');
  }
}

export function addRecipe(state) {
  let title = $('#recipe-title').val();
  let time = $('#ready-in-mins').val();
  let ingredients = []; //{name, amount}
  let $ingredientName;
  $('#ingredients').find('li').each(function (index,element) {
    ingredients.push({
      name: $(element).find('.ingredient-name').val(),
      amount: $(element).find('.ingredient-amount').val()
    });
  });

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
