// jshint esversion:6

export function renderPage() {
  $('main').find('.viewable').addClass('hide');
  $('main').find('.viewable').removeClass('viewable');
  $('#new-recipe-page').removeClass('hide');
  $('#new-recipe-page').addClass('viewable');
}

export function appendList(element, keyPressed) {
  if(keyPressed==='Enter') {
    element.after('<li><input type="text" placeholder="new item"></li>');
  }
}

export function addRecipe(state) {
  let title = $('#recipe-title').val();
  console.log(title);
  let time = $('#ready-in-mins').val();
  let ingredients = [];
  $('#ingredients').find('input').each(
    (index, element) => ingredients.push($(element).val())
  );
  // let ingredients = $('#ingredients').find('input').val();
  console.log(ingredients);
  let steps = [];
  $('#steps').find('input').each(
    (index, element) => steps.push($(element).val())
  );
  // let steps = $('#steps').find('input').val();
  console.log(steps);
  state.myRecipes.push({
    title: title,
    readyInMinutes: time,
    listofIngredients: ingredients,
    instructions: steps
  });
  console.log(state.myRecipes);
}
