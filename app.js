
// TODO: Get searchbar working
//jshint esversion: 6

function getSearchResults(userQuery) {
  let settings = {
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
  return $.ajax(settings);
}

function getSearchResultsByIngredient(myIngredients, numResults=5) {
  let settings = {
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
  return $.ajax(settings);
}

function makeResultsList(resultObj) {
  let previewArray = [];
  let recipeId = '';
  $.each(resultObj.Recipes, function(ind, obj) {
    recipeId = obj.link.split('-').pop();
    previewArray.push({
      title: obj.name,
      imgUrl: obj.image,
      id: +recipeId
    });
  });
  return previewArray;
}

function renderResultsList(previewArray){
  let previewHtml = '';
  $.each(previewArray, function(ind, obj) {
    previewHtml += '<li><a>';
    previewHtml += '<img src="'+obj.imgUrl+'" alt="'+obj.title+'">';
    previewHtml += '<span>'+obj.title+'</span>';
    previewHtml += '<form><input type="submit"></form>';
    previewHtml += '</li></a>';
  });
  $('#search-results').html(previewHtml);
}

function getPreviewData(searchResult) {
  let recipeObj = searchResult.recipe;
  let previewInfo = {
    imgUrl: recipeObj.image_url,
    title: recipeObj.title,
    id: recipeObj.f2f_url.split('/').pop(),
    srcUrl: source_url
  };
  return previewInfo;
}

function renderPreview(previewInfo) {
  let imgHtml = '<img src="'+previewInfo.imgUrl+'">';
  let titleHtml = '<span> '+previewInfo.title+'</span>';
  $('#search-results').append('<li>'+imgHtml+titleHtml+'</li>');
}

$(function main() {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    let query = $(this).find('#search-bar').val();
    console.log(query);
    let xhrPromise = getSearchResults(query);
    xhrPromise.done(function (data) {
      console.log(data);
      renderResultsList(makeResultsList(data));
    });
  });
});
