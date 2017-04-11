
//jshint esversion: 6
const CLIENT_ID = 'myj4y8uy5mlsg9s';
const MASHAPE_KEY = 'AyBmxPBKYUmshcuDOEgra2staJv9p1Tm8cgjsnsk5j9j5dONbK';
function initAppState() {
  return {
    resultList: [],
    currentView: 'search',
    previousHtml: '',
    myRecipes: [],//list of recipe objs
    loggedIn: false,
    accessToken: ''
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

function addToMyRecipes(simpleRecipeObj, state) {
  state.push(simpleRecipeObj);
}

function redirectToOAuth(){
  let url = 'https://www.dropbox.com/oauth2/authorize?'+
  'response_type=token&'+
  'client_id='+CLIENT_ID+'&'+
  'redirect_uri=http://localhost';
  window.location.replace(url);
}

function downloadRecipes(state) {
  let ajaxSettings = {
    url: 'https://content.dropboxapi.com/2/files/download',
    method: 'POST',
    dataType: 'json',
    // contentType: 'application/json',
    // data: JSON.stringify({arg:{path: "nikuman.png"}}),
      //reject_cors_preflight: true,
    headers: {
      Authorization: 'Bearer '+state.accessToken,
      'Dropbox-API-Arg': JSON.stringify({path: '/questions.json'})
    }
  };
  return $.ajax(ajaxSettings);
}

function uploadMyRecipesToDropbox(dropbox, state) {

}

function getFolderContents(state) {
  let settings = {
    url: "https://api.dropboxapi.com/2/files/list_folder",
    method: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({path: ""}),
    headers: {
      Authorization: 'Bearer '+state.accessToken
    }
  };
  return $.ajax(settings);
}

$(function main() {
  let appState = initAppState();
  //let dbx = new window.Dropbox();
  let redirectResponse = window.location.href.split('#')[1];

  if(typeof redirectResponse != 'undefined'){
    appState.accessToken = redirectResponse.split('&')[0].split('=')[1];
    appState.loggedIn = true;
  }

  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    let query = $(this).find('#search-bar').val();

    let xhrPromise = getSearchResults(query);
    xhrPromise.done(function (data) {
      makeResultsList(data,appState);
      renderResultsList(appState);
    });
  });

  $('#search-results').on('click','li',function() {
    console.log($(this).data('recipeid'));

    let xhrPromise = getRecipeDetails($(this).data('recipeid'));
    xhrPromise.done(function (data) {
      renderRecipeDetails(simplifyRecipeDetails(data),appState);
    });
  });

  $('#login').on('click', function() {
    if(!appState.loggedIn) {redirectToOAuth();}
  });

  $('#my-recipes').on('click', function() {
    if(appState.loggedIn) {
      console.log('sending!');
      let xhr = downloadRecipes(appState);
      xhr.then(
        function success(data, status, jqxhr) {
          console.log(jqxhr.responseText);
          console.log(status);
          console.log(data);
        },
        function error(jqxhr,status, errorThrown) {
          console.log(jqxhr.responseText);
          console.log(status);
          console.log(errorThrown);
        }
      );
    }
  });
});
