//jshint esversion: 6

import * as recipe from './modules/api/spoonacular';
import * as dropbox from './modules/api/dropbox';
import * as create from './modules/page-views/create';
import * as search from './modules/page-views/search';
import * as my_recipes from './modules/page-views/my-recipes';
import * as render from './modules/page-views/render-generic';

const REDIRECT_URI = 'http://localhost/spoon-n-drop/build/';
function initAppState() {
  return {
    resultList: [],
    currentView: 'search',
    previousHtml: '',
    myRecipes: [], //list of recipe objs
    loggedIn: false,
    accessToken: '',
    currentRecipe: {}
  };
}

function userHasAccessToken(token) {
  if(token !== 'undefined' && token !== null) {return true;}
  else {
    let redirectResponse = window.location.href.split('#')[1];
    if(typeof redirectResponse != 'undefined') {
      window.sessionStorage.setItem('accessToken', redirectResponse.split('&')[0].split('=')[1]);
      window.location.replace(REDIRECT_URI);
      return true;
    }
    else {return false;}
  }
}

$(function main() {
  let appState = initAppState();
  let token = window.sessionStorage.getItem('accessToken');

  if(userHasAccessToken(token)) {
    appState.loggedIn = true;
    $('#login').text('Logged In');
  }

  $('#login').on('click', () => { if(!appState.loggedIn) {dropbox.OAuth();} });

  $('#search-for-recipes').on('click', () => render.switchView($('#search-page')));

  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    let query = $(this).find('#search-bar').val();
    recipe.getSearchResults(query).done(function (data) {
      search.makeResultsList(data,appState);
      search.renderResultsList(appState);
    });
  });

  $('#search-results').on('click','li',function() {
    let xhr = recipe.getRecipeDetails($(this).data('recipeid'));
    xhr.done( function (data) {
      const $recipePage = $('#single-recipe-page');
      render.switchView($recipePage);
      appState.currentRecipe = search.simplifyRecipeDetails(data);
      render.showRecipe($recipePage.find('.recipe-container'), appState.currentRecipe
      );
    });
  });

  $('#create-recipe').on('click', () => render.switchView($('#new-recipe-page')) );

  $('#my-recipes').on('click', function () {
    if(appState.loggedIn) {
      dropbox.getMyRecipes().then(
        data => {
          appState.myRecipes = data;
          console.log(appState.myRecipes);
          render.switchView($('#my-recipes-page'));
          my_recipes.showList(appState);
        },
        jqxhr => console.log(jqxhr.responseText)
      );
    }
  });

  $('#my-recipes-page').on('click', '.my-recipe-list-item', function() {
    const position = $('#my-recipes-page').find('li').index($(this));
    render.showRecipe(
      $('#single-recipe-page').find('.recipe-container'), appState.myRecipes[position]
    );
  });
  $('#my-recipes-page').on('click', '.edit-recipe', function() {

  });

  $('#my-recipes-page').on('click', '.delete-recipe', function (event) {
    event.stopPropagation();
    const index = $('.delete-recipe').index($(this));
    appState.myRecipes.splice(index,1);
    dropbox.deleteFileHelper().always(
      data => dropbox.postMyRecipes(appState).then(
        data => {console.log('Success');my_recipes.showList(appState);},
        jqxhr => console.log(jqxhr.responseText)
      )
    );
  });

  $('#new-recipe-page').find('form').on('click', 'button', function(event) {
    event.preventDefault();
    create.addRecipe(appState);
    dropbox.deleteFileHelper().always(
      data => dropbox.postMyRecipes(appState).then(
        data => console.log('Success'),
        jqxhr => console.log(jqxhr.responseText)
      )
    );
  });

  $('.create-list').on('keypress', 'li', function (event) {
    create.newListItem($(this), event.key);
  });

  $('#single-recipe-page').on('click', '#add-to-my-recipes', function() {
    appState.myRecipes.push(appState.currentRecipe);
    console.log(appState.myRecipes);
    dropbox.deleteFileHelper().always(
      data => dropbox.postMyRecipes(appState).then(
        data => console.log('Success'),
        jqxhr => console.log(jqxhr.responseText)
      )
    );
    $(this).text('In My Recipes');
  });
});
