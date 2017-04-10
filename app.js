
// TODO: Get searchbar working
//jshint esversion: 6
let example = {
  "Recipes": [
    {
      "name": "ChickenFajitas",
      "image": "https://webknox.com/recipeImages/520451-556x370.jpg",
      "link": "https://spoonacular.com/recipes/chickenfajitas-520451",
      "kvtable": "<table><tr><td>Cost</td><td>$2.58 per serving</td></tr><tr><td>Calories</td><td>Cost per Serving: $2.58</td></tr><tr><td>Protein</td><td>31g Protein</td></tr><tr><td>Fat</td><td>9g Total Fat</td></tr><tr><td>Carbs</td><td>7g Carbs</td></tr></table>"
    },
    {
      "name": "Chickety China the Chinese Chicken",
      "image": "https://webknox.com/recipeImages/145742-556x370.jpg",
      "link": "https://spoonacular.com/recipes/chickety-china-the-chinese-chicken-145742",
      "kvtable": "<table><tr><td>Cost</td><td>$1.29 per serving</td></tr><tr><td>Calories</td><td>Cost per Serving: $1.29</td></tr><tr><td>Protein</td><td>21g Protein</td></tr><tr><td>Fat</td><td>17g Total Fat</td></tr><tr><td>Carbs</td><td>33g Carbs</td></tr></table>"
    },
    {
      "name": "Cashew Chicken / Kaju Chicken",
      "image": "https://webknox.com/recipeImages/602887-556x370.jpg",
      "link": "https://spoonacular.com/recipes/cashew-chicken-kaju-chicken-602887",
      "kvtable": "<table><tr><td>Cost</td><td>$1.84 per serving</td></tr><tr><td>Calories</td><td>Cost per Serving: $1.80</td></tr><tr><td>Protein</td><td>17g Protein</td></tr><tr><td>Fat</td><td>22g Total Fat</td></tr><tr><td>Carbs</td><td>21g Carbs</td></tr></table>"
    },
    {
      "name": "Chicken Caesar Chicken Tenders",
      "image": "https://webknox.com/recipeImages/493600-556x370.jpg",
      "link": "https://spoonacular.com/recipes/chicken-caesar-chicken-tenders-493600",
      "kvtable": "<table><tr><td>Cost</td><td>$5.35 per serving</td></tr><tr><td>Calories</td><td>Cost per Serving: $5.35</td></tr><tr><td>Protein</td><td>15g Protein</td></tr><tr><td>Fat</td><td>11g Total Fat</td></tr><tr><td>Carbs</td><td>7g Carbs</td></tr></table>"
    },
    {
      "name": "Chicken Chicken Curry",
      "image": "https://webknox.com/recipeImages/472214-556x370.jpg",
      "link": "https://spoonacular.com/recipes/chicken-chicken-curry-472214",
      "kvtable": "<table><tr><td>Cost</td><td>$2.25 per serving</td></tr><tr><td>Calories</td><td>Cost per Serving: $2.36</td></tr><tr><td>Protein</td><td>37g Protein</td></tr><tr><td>Fat</td><td>14g Total Fat</td></tr><tr><td>Carbs</td><td>7g Carbs</td></tr></table>"
    }
  ],
  "Grocery Products": [
    {
      "name": "Betty Crocker Chicken Helper - Parmesan Crusted Chicken",
      "image": "https://spoonacular.com/productImages/185030-312x231.jpg",
      "link": "https://spoonacular.com/products/betty-crocker-chicken-helper-parmesan-crusted-chicken-185030",
      "kvtable": "<table><tr><td>Calories</td><td>140 Calories</td></tr><tr><td>Protein</td><td>5g Protein</td></tr><tr><td>Fat</td><td>1g Total Fat</td></tr><tr><td>Carbs</td><td>27g Carbs</td></tr></table>"
    },
    {
      "name": "Betty Crocker Chicken Helper - Creamy Chicken & Noodle",
      "image": "https://spoonacular.com/productImages/208247-312x231.jpg",
      "link": "https://spoonacular.com/products/betty-crocker-chicken-helper-creamy-chicken-noodle-208247",
      "kvtable": "<table><tr><td>Calories</td><td>100 Calories</td></tr><tr><td>Protein</td><td>3g Protein</td></tr><tr><td>Fat</td><td>0.5g Total Fat</td></tr><tr><td>Carbs</td><td>20g Carbs</td></tr></table>"
    },
    {
      "name": "Betty Crocker Chicken Helper - Crispy Ranch Chicken",
      "image": "https://spoonacular.com/productImages/183356-312x231.jpg",
      "link": "https://spoonacular.com/products/betty-crocker-chicken-helper-crispy-ranch-chicken-183356",
      "kvtable": "<table><tr><td>Calories</td><td>110 Calories</td></tr><tr><td>Protein</td><td>2g Protein</td></tr><tr><td>Fat</td><td>0.5g Total Fat</td></tr><tr><td>Carbs</td><td>23g Carbs</td></tr></table>"
    },
    {
      "name": "Betty Crocker Chicken Helper - Bold Cajun Chicken",
      "image": "https://spoonacular.com/productImages/208251-312x231.jpg",
      "link": "https://spoonacular.com/products/betty-crocker-chicken-helper-bold-cajun-chicken-208251",
      "kvtable": "<table><tr><td>Calories</td><td>120 Calories</td></tr><tr><td>Protein</td><td>3g Protein</td></tr><tr><td>Fat</td><td>0.5g Total Fat</td></tr><tr><td>Carbs</td><td>27g Carbs</td></tr></table>"
    },
    {
      "name": "Betty Crocker Chicken Helper - Chicken Fried Rice",
      "image": "https://spoonacular.com/productImages/184364-312x231.jpg",
      "link": "https://spoonacular.com/products/betty-crocker-chicken-helper-chicken-fried-rice-184364",
      "kvtable": "<table><tr><td>Calories</td><td>110 Calories</td></tr><tr><td>Protein</td><td>3g Protein</td></tr><tr><td>Fat</td><td>0.0g Total Fat</td></tr><tr><td>Carbs</td><td>24g Carbs</td></tr></table>"
    }
  ],
  "Articles": [
    {
      "name": "Chicken and Poultry",
      "image": "https://spoonacular.com/application/frontend/images/academy/chicken-wings.jpg",
      "link": "https://spoonacular.com/academy/chicken-and-poultry",
      "kvtable": "<table></table>"
    },
    {
      "name": "Meat Shredders for Pork, Chicken, or Beef",
      "image": "https://spoonacular.com/application/frontend/images/articles/meat-shredder-in-action.jpg",
      "link": "https://spoonacular.com/articles/meat-shredder",
      "kvtable": "<table></table>"
    }
  ]
};
let example2 = {
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "weightWatcherSmartPoints": 9,
  "gaps": "no",
  "lowFodmap": false,
  "ketogenic": false,
  "whole30": false,
  "servings": 4,
  "preparationMinutes": 10,
  "cookingMinutes": 10,
  "sourceUrl": "http://feedmephoebe.com/2013/11/job-food52s-pan-roasted-cauliflower/",
  "spoonacularSourceUrl": "https://spoonacular.com/on-the-job-pan-roasted-cauliflower-from-food52-479101",
  "aggregateLikes": 225,
  "spoonacularScore": 97,
  "healthScore": 46,
  "creditText": "Feed Me Phoebe",
  "sourceName": "Feed Me Phoebe",
  "pricePerServing": 199.25,
  "extendedIngredients": [
    {
      "id": 18079,
      "aisle": "Pasta and Rice",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg",
      "name": "breadcrumbs",
      "amount": 0.5,
      "unit": "cup",
      "unitShort": "cup",
      "unitLong": "cups",
      "originalString": "1/2 cup fresh breadcrumbs (I used gluten-free!)",
      "metaInformation": [
        "fresh",
        "(I used gluten-free!)"
      ]
    },
    {
      "id": 11135,
      "aisle": "Produce",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/cauliflower.jpg",
      "name": "cauliflower",
      "amount": 1,
      "unit": "head",
      "unitShort": "head",
      "unitLong": "head",
      "originalString": "1 head of cauliflower",
      "metaInformation": []
    },
    {
      "id": 11297,
      "aisle": "Produce;Spices and Seasonings",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley-curly.jpg",
      "name": "fresh parsley",
      "amount": 1,
      "unit": "handful",
      "unitShort": "handful",
      "unitLong": "handful",
      "originalString": "1 handful parsley, chopped",
      "metaInformation": [
        "chopped"
      ]
    },
    {
      "id": 2063,
      "aisle": "Produce",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/rosemary.jpg",
      "name": "fresh rosemary",
      "amount": 2,
      "unit": "teaspoons",
      "unitShort": "tsp",
      "unitLong": "teaspoons",
      "originalString": "2 teaspoons fresh rosemary, chopped",
      "metaInformation": [
        "fresh",
        "chopped"
      ]
    },
    {
      "id": 9297,
      "aisle": "Dried Fruits;Produce;Baking",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/golden-raisins.jpg",
      "name": "golden raisins",
      "amount": 0.25,
      "unit": "cup",
      "unitShort": "cup",
      "unitLong": "cups",
      "originalString": "1/4 cup golden raisins, chopped",
      "metaInformation": [
        "chopped"
      ]
    },
    {
      "id": 4053,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
      "name": "olive oil",
      "amount": 0.25,
      "unit": "cup",
      "unitShort": "cup",
      "unitLong": "cups",
      "originalString": "1/4 cup olive oil, divided",
      "metaInformation": [
        "divided"
      ]
    },
    {
      "id": 12147,
      "aisle": "Produce;Baking",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/pine-nuts.jpg",
      "name": "pine nuts",
      "amount": 0.5,
      "unit": "cup",
      "unitShort": "cup",
      "unitLong": "cups",
      "originalString": "1/2 cup pine nuts",
      "metaInformation": []
    },
    {
      "id": 1012047,
      "aisle": "Spices and Seasonings",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
      "name": "sea salt",
      "amount": 1,
      "unit": "teaspoon",
      "unitShort": "tsp",
      "unitLong": "teaspoon",
      "originalString": "1 teaspoon sea salt",
      "metaInformation": []
    },
    {
      "id": 10211111,
      "aisle": "Ethnic Foods;Spices and Seasonings",
      "image": "https://spoonacular.com/cdn/ingredients_100x100/sumac.png",
      "name": "sumac",
      "amount": 0.5,
      "unit": "teaspoon",
      "unitShort": "tsp",
      "unitLong": "teaspoons",
      "originalString": "1/2 teaspoon sumac",
      "metaInformation": []
    }
  ],
  "id": 479101,
  "title": "On the Job: Pan Roasted Cauliflower From Food52",
  "readyInMinutes": 20,
  "image": "https://spoonacular.com/recipeImages/On-the-Job--Pan-Roasted-Cauliflower-From-Food52-479101.jpg",
  "imageType": "jpg",
  "cuisines": [],
  "dishTypes": [
    "side dish"
  ],
  "instructions": "Cut the florets off the stems and and then chop them into tiny florets. You can also chop up the stems into tiny pieces if you want. You should have about 6 cups of chopped cauliflower. In a large skillet heat 2 tablespoons of olive oil over medium-high heat. Add the cauliflower, 1 teaspoon of salt, rosemary, and sumac. Sauté until cauliflower is tender and starts to brown a bit, stirring as necessary, about 15 minutes. You can also add a bit of olive oil if the pan starts to get too dry or the cauliflower is starting to stick. Meanwhile, in a small skillet, toast the pinenuts over medium heat until golden brown. Set aside. Heat the remaining 2 tablespoons of olive oil in the same pan. Once oil is shimmering, toss in the breadcrumbs and stir, toasting the breadcrumbs. Season with a pinch of kosher salt and a few turns of freshly ground black pepper. Remove from the heat and toss in half of the chopped parsley. When cauliflower is done, remove from the heat and season to taste with freshly ground black pepper and a pinch or so of salt if necessary. Toss in the toasted pine nuts, the chopped raisins, and the remaining parsley. When ready to serve, sprinkle the top with the toasted breadcrumbs and some pecorino.",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Cut the florets off the stems and and then chop them into tiny florets. You can also chop up the stems into tiny pieces if you want. You should have about 6 cups of chopped cauliflower. In a large skillet heat 2 tablespoons of olive oil over medium-high heat.",
          "ingredients": [
            {
              "id": 11135,
              "name": "cauliflower",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cauliflower.jpg"
            },
            {
              "id": 4053,
              "name": "olive oil",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404645,
              "name": "frying pan",
              "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
            }
          ]
        },
        {
          "number": 2,
          "step": "Add the cauliflower, 1 teaspoon of salt, rosemary, and sumac. Sauté until cauliflower is tender and starts to brown a bit, stirring as necessary, about 15 minutes. You can also add a bit of olive oil if the pan starts to get too dry or the cauliflower is starting to stick. Meanwhile, in a small skillet, toast the pinenuts over medium heat until golden brown. Set aside.",
          "ingredients": [
            {
              "id": 11135,
              "name": "cauliflower",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cauliflower.jpg"
            },
            {
              "id": 4053,
              "name": "olive oil",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
            },
            {
              "id": 12147,
              "name": "pine nuts",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/pine-nuts.jpg"
            },
            {
              "id": 10211111,
              "name": "sumac",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/sumac.png"
            },
            {
              "id": 2047,
              "name": "salt",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404645,
              "name": "frying pan",
              "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
            }
          ]
        },
        {
          "number": 3,
          "step": "Heat the remaining 2 tablespoons of olive oil in the same pan. Once oil is shimmering, toss in the breadcrumbs and stir, toasting the breadcrumbs. Season with a pinch of kosher salt and a few turns of freshly ground black pepper.",
          "ingredients": [
            {
              "id": 18079,
              "name": "breadcrumbs",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
            },
            {
              "id": 1082047,
              "name": "kosher salt",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
            },
            {
              "id": 4053,
              "name": "olive oil",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404645,
              "name": "frying pan",
              "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
            }
          ]
        },
        {
          "number": 4,
          "step": "Remove from the heat and toss in half of the chopped parsley. When cauliflower is done, remove from the heat and season to taste with freshly ground black pepper and a pinch or so of salt if necessary. Toss in the toasted pine nuts, the chopped raisins, and the remaining parsley. When ready to serve, sprinkle the top with the toasted breadcrumbs and some pecorino.",
          "ingredients": [
            {
              "id": 18079,
              "name": "breadcrumbs",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
            },
            {
              "id": 11135,
              "name": "cauliflower",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/cauliflower.jpg"
            },
            {
              "id": 12147,
              "name": "pine nuts",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/pine-nuts.jpg"
            },
            {
              "id": 11297,
              "name": "parsley",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg"
            },
            {
              "id": 2047,
              "name": "salt",
              "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
            }
          ],
          "equipment": []
        }
      ]
    }
  ]
}
;
function initAppState() {
  return {
    resultList: [],
    currentView: 'search',
    previousHtml: ''
  };
}

function getSearchResults(userQuery) {
  let ajaxSettings = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/site/search',
    data: {
      query: userQuery
    },
    dataType: 'json',
    headers: {
      'X-Mashape-Key': 'AyBmxPBKYUmshcuDOEgra2staJv9p1Tm8cgjsnsk5j9j5dONbK',
      Accept: 'application/json'
    }
  };
  return $.ajax(ajaxSettings);
}

function getSearchResultsByIngredient(myIngredients, numResults=5) {
  let ajaxSettings = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
    data: {
      fillIngredients: false,
      ingredients: myIngredients,
      limitLicense: false,
      number: numResults,
      ranking: 1
    },
    dataType: 'json',
    headers: {
      'X-Mashape-Key': 'AyBmxPBKYUmshcuDOEgra2staJv9p1Tm8cgjsnsk5j9j5dONbK',
      Accept: 'application/json'
    }
  };
  return $.ajax(ajaxSettings);
}

function makeResultsList(resultObj, state) {
  let previewList = [];
  let recipeId = '';
  $.each(resultObj.Recipes, function(ind, obj) {
    recipeId = obj.link.split('-').pop();
    console.log(recipeId);
    previewList.push({
      title: obj.name,
      imgUrl: obj.image,
      id: recipeId
    });
  });
  state.resultList = previewList;
}

function renderResultsList(state){
  let previewHtml = '';
  $.each(state.resultList, function(ind, obj) {
    previewHtml += '<li data-recipeid="'+obj.id+'"><a>'+
    '<img src="'+obj.imgUrl+'" alt="'+obj.title+'">'+
    '<span>'+obj.title+'</span>'+
    '<form><input type="submit"></form>'+
    '</li></a>';
  });
  $('#search-results').html(previewHtml);
}

function getRecipeDetails(id) {
  let ajaxSettings = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information',
    data: {
      includeNutrition: false
    },
    dataType: 'json',
    headers: {
      'X-Mashape-Key': 'AyBmxPBKYUmshcuDOEgra2staJv9p1Tm8cgjsnsk5j9j5dONbK',
      Accept: 'application/json'
    }
  };
  return $.ajax(ajaxSettings);
}

function simplifyRecipeDetails(recipeObj) {
  /*Refer to 'get-recipe-info-sample-response.json' for recipeObj's complete structure*/
  let ingredients = [];
  $.each(recipeObj.extendedIngredients, function(ind, obj) {
    ingredients.push({
      name: obj.name,
      amount: obj.amount + obj.unitLong
    });
  });
  let steps = [];
  $.each(recipeObj.analyzedInstructions[0].steps, function(ind, obj) {
    steps.push(obj.step);
  });
  return {
    title: recipeObj.title,
    time: recipeObj.readyInMinutes,
    listofIngredients: ingredients,
    instructions: steps
  };
}

function renderRecipeDetails(simpleRecipeObj, state) {
  state.previousHtml = $('main').html();
  let recipeInfoHtml ='<span><h1>'+
    simpleRecipeObj.title+'</h1>'+
    '<h2>'+simpleRecipeObj.time+'minutes</h2></span><ul>';
  $.each(simpleRecipeObj.listofIngredients, function(ind, obj) {
    recipeInfoHtml += '<li>'+obj.amount+obj.name+'</li>';
  });
  recipeInfoHtml += '</ul><ol>';
  $.each(simpleRecipeObj.instructions, function(ind,val) {
    recipeInfoHtml += '<li>'+val+'</li>';
  });
  recipeInfoHtml += '</ol>';
  $('main').html(recipeInfoHtml);
}
$(function main() {
  let appState = initAppState();
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    let query = $(this).find('#search-bar').val();
    makeResultsList(example,appState);
    renderResultsList(appState);
  // });
    // let xhrPromise = getSearchResults(query);
    // xhrPromise.done(function (data) {
      // console.log(data);
      // makeResultsList(data,appState);
      // renderResultsList(appState);
    // });
  });

  $('#search-results').on('click','li',function() {
    console.log($(this).data('recipeid'));
    renderRecipeDetails(simplifyRecipeDetails(example2),appState);
    // let xhrPromise = getRecipeDetails($(this).data('recipeid'));
    // xhrPromise.done(function (data) {
      // let obj = simplifyRecipeDetails(data);
      // renderRecipeDetails(obj,appState);
    // });
  });
});
