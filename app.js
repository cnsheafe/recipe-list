
// TODO: Get searchbar working
//jshint esversion: 6
function getFood2ForkResults(query, sortOrder='r', pageCount=1) {
  let settings = {
    url: 'http://food2fork.com/api/search',
    data: {
      key: '488b157b5f1a04456443b2378a56542d',
      q: query,
      sort:  sortOrder,
      page:  pageCount
    },
    dataType: 'json',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  };
  return $.ajax(settings);
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
  $('#search-bar').on('submit',function(event) {
    event.preventDefault();
    let query = $(this).find('input').text();
    let xhrPromise = getFood2ForkResults(query);
    xhrPromise.done(function(data) {
      console.log(data);
    });
  });
});
