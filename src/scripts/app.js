//jshint esversion: 6

import * as recipe from './modules/spoonacular';
import * as dropbox from './modules/dropbox';
import * as create from './modules/pages-create';

const REDIRECT_URI = 'http://localhost/spoon-n-drop/build/';
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
  let token = window.sessionStorage.getItem('accessToken');
  if(token !== 'undefined') {
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

  console.log(appState.loggedIn);
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    let query = $(this).find('#search-bar').val();

    let xhrPromise = recipe.getSearchResults(query);
    xhrPromise.done(function (data) {
      makeResultsList(data,appState);
      renderResultsList(appState);
    });
  });

  $('#search-results').on('click','li',function() {
    console.log($(this).data('recipeid'));

    let xhrPromise = recipe.getRecipeDetails($(this).data('recipeid'));
    xhrPromise.done(
      (data) => renderRecipeDetails(simplifyRecipeDetails(data), appState)
    );
  });

  $('#login').on('click', function() {
    if(!appState.loggedIn) {dropbox.OAuth();}
  });

  $('#my-recipes').on('click', function() {
    if(appState.loggedIn) {
      let xhr = dropbox.getMyRecipes(appState);
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
      let xhr = dropbox.postMyRecipes(appState);
      xhr.then(
        data => console.log('Success!'),
        jqxhr => console.log(jqxhr.responseText)
      );
    }
  });

  $('#create-recipe').on('click', () => create.renderPage() );
  $('.create-list').on('keypress', 'li',
  function (event) {
    create.appendList($(this), event.key);
  });
  $('#new-recipe-page').find('form').on('click', 'button', function(event) {
      event.preventDefault();
      create.addRecipe(appState);
      let xhr = dropbox.deleteFileHelper();
      xhr.then(
        data => dropbox.postMyRecipes(appState).then(
          data => console.log('Success'),
          jqxhr => console.log(jqxhr.responseText)
        ),
        jqxhr => console.log(jqxhr.responseText)
      );
    });
});
