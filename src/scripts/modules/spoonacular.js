// jshint esversion: 6
const MASHAPE_KEY = 'AyBmxPBKYUmshcuDOEgra2staJv9p1Tm8cgjsnsk5j9j5dONbK';

export function getSearchResults(userQuery) {
  let ajaxSettings = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/site/search',
    data: {
      query: userQuery
    },
    dataType: 'json',
    headers: {
      'X-Mashape-Key': MASHAPE_KEY,
      Accept: 'application/json'
    }
  };
  return $.ajax(ajaxSettings);
}

export function getRecipeDetails(id) {
  let ajaxSettings = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information',
    data: {
      includeNutrition: false
    },
    dataType: 'json',
    headers: {
      'X-Mashape-Key': MASHAPE_KEY,
      Accept: 'application/json'
    }
  };
  return $.ajax(ajaxSettings);
}

// function getSearchResultsByIngredient(myIngredients, numResults=5) {
//   let ajaxSettings = {
//     url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
//     data: {
//       fillIngredients: false,
//       ingredients: myIngredients,
//       limitLicense: false,
//       number: numResults,
//       ranking: 1
//     },
//     dataType: 'json',
//     headers: {
//       'X-Mashape-Key': MASHAPE_KEY,
//       Accept: 'application/json'
//     }
//   };
//   return $.ajax(ajaxSettings);
// }
