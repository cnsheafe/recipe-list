// jshint esversion:6

export function addRecipe() {
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

  return {
    title: title,
    readyInMinutes: time,
    listofIngredients: ingredients,
    instructions: steps
  };
}

export function newListItem($element, keyPressed) {
  if(keyPressed === 'Enter') {
    if ($element.hasClass('ingredient')) {
    $element.after(`
      <li class="ingredient input-group">
        <span class="col-xs-8 col-xs-offset-1">
				  <input type="text" class="ingredient-name form-control" placeholder="ingredient">
        </span>
        <span class="col-xs-3">
			     <input type="text" class="ingredient-amount form-control" placeholder="">
        <span>Amount</span>
        </span>
			</li>
  `);
    }
    else {
      $element.after(
        `<li class="col-xs-12">
            <input type="text" class="form-control" placeholder="First step">
          </li>`
      );
    }
  }
}
