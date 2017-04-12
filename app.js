
//jshint esversion: 6

const CLIENT_ID = 'myj4y8uy5mlsg9s';
const MASHAPE_KEY = 'AyBmxPBKYUmshcuDOEgra2staJv9p1Tm8cgjsnsk5j9j5dONbK';
const REDIRECT_URI = 'http://localhost/spoon-n-drop';
const MYRECIPES_PATH = '/my-recipes.json';
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
      'X-Mashape-Key': MASHAPE_KEY,
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
      'X-Mashape-Key': MASHAPE_KEY,
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
      'X-Mashape-Key': MASHAPE_KEY,
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
  'redirect_uri='+REDIRECT_URI;
  window.location.replace(url);
}

/*GET and param urls used to avoid CORS pre-flight*/
function getMyRecipes(state) {
  let ajaxSettings = {
    url: 'https://content.dropboxapi.com/2/files/download',
    method: 'GET',
    dataType: 'json',
    data: {
      authorization: 'Bearer '+ window.sessionStorage.getItem('accessToken'),
      arg: JSON.stringify({path: '/questions.json'}),
      reject_cors_preflight: true
    }
  };
  return $.ajax(ajaxSettings);
}

function postMyRecipes(state) {
  let jstring = JSON.stringify(state.myRecipes);
  let ajaxSettings = {
    url: 'https://content.dropboxapi.com/2/files/upload',
    method: 'POST',
    contentType: 'application/octet-stream',
    data: jstring,
    headers: {
      Authorization: 'Bearer '+window.sessionStorage.getItem('accessToken'),
      'Dropbox-API-Arg': JSON.stringify({path: '/burt2.json'})
    }
  };
  return $.ajax(ajaxSettings);
}

//TODO: localstorage.setItem
//TODO: look up local storage, session storage, cookies
$(function main() {
  let appState = initAppState();

  if(window.sessionStorage.getItem('accessToken') !== null) {
    appState.loggedIn = true;
  }
  else {
    let redirectResponse = window.location.href.split('#')[1];
    if(typeof redirectResponse != 'undefined') {
      window.sessionStorage.setItem('accessToken', redirectResponse.split('&')[0].split('=')[1]);
      window.location.replace(REDIRECT_URI);
      appState.loggedIn = true;
    }
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
      let xhr = getMyRecipes(appState);
      xhr.then(
        function success(data) {
          appState.myRecipes = data;
          console.log(appState.myRecipes);
        },
        function error(jqxhr) {
          console.log(jqxhr.responseText);
        }
      );
    }
  });

  $('#search-button').on('click', function () {
    if(appState.loggedIn) {
      let xhr = postMyRecipes(appState);
      xhr.then(
        function success(data) {
          console.log('Success!');
        },
        function error(jqxhr) {
          console.log(jqxhr.responseText);
        }
      );
    }
  });

});
