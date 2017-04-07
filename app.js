
// TODO: Get searchbar working
//jshint esversion: 6
function getFood2ForkResults(query, sortByRating=true, pageCount=1) {
  let settings = {
    url: 'http://food2fork.com/api/search',
    data: {
      key: '488b157b5f1a04456443b2378a56542d',
      q: query,
      sort:  sortOrder,
      page:  pageCount
    },
    dataType: 'json'
  };
  return $.ajax(settings);
}

$(function main() {
  $('#search-bar').on('submit',function(event) {
    event.preventDefault();
    let query = $(this).find('input').text();
    let xhrPromise = getFood2ForkResults(query);
    xhrPromise.done(function (data) {
      
    });
  });
});
