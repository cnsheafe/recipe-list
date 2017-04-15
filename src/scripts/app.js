//jshint esversion: 6

import * as recipe from './modules/api/spoonacular';
import * as dropbox from './modules/api/dropbox';
import * as create from './modules/page-views/create';
import * as search from './modules/page-views/search';
import * as my_recipes from './modules/page-views/my-recipes';
import {renderRecipe} from './modules/page-views/render';

const REDIRECT_URI = 'http://localhost/spoon-n-drop/build/';
function initAppState() {
  return {
    resultList: [],
    currentView: 'search',
    previousHtml: '',
    myRecipes: [], //list of recipe objs
    loggedIn: false,
    accessToken: ''
  };
}


$(function main() {
  let appState = initAppState();
  let token = window.sessionStorage.getItem('accessToken');

  if(token !== 'undefined' && token !== null) {
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
    recipe.getSearchResults(query).done(function (data) {
      search.makeResultsList(data,appState);
      search.renderResultsList(appState);
    });
  });

  $('#search-results').on('click','li',function() {
    let xhr = recipe.getRecipeDetails($(this).data('recipeid'));
    xhr.done(
      data => search.renderRecipeDetails(search.simplifyRecipeDetails(data), appState)
    );
  });

  $('#login').on('click', function() {
    if(!appState.loggedIn) {dropbox.OAuth();}
  });

  $('#my-recipes').on('click', function() {
    if(appState.loggedIn) {
      dropbox.getMyRecipes().then(
        data => {
          appState.myRecipes = data;
          console.log(appState.myRecipes);
          my_recipes.render(appState);
        },
        jqxhr => console.log(jqxhr.responseText)
      );
    }
  });

  $('#my-recipes-page').on('click', '.my-recipe-list-item', function() {
    const position = $('#my-recipes-page').find('li').index($(this));
    console.log(position);
    renderRecipe($('main'), appState.myRecipes[position]);
  }

  );
  $('#search-for-recipes').on('click', function () {
  });

  $('#create-recipe').on('click', () => create.renderPage() );
  $('.create-list').on('keypress', 'li', function (event) {
    create.renderNewListItem($(this), event.key);
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
});
