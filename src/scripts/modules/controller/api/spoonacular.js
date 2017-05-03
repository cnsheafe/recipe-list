// jshint esversion: 6
// See Spoonacular API documentation
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

export function getBetterSearchResults(userQuery){
  let ajaxSettings = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',
    data: {
      query: userQuery,
      number: 25
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
