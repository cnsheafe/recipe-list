// jshint esversion: 6
export function showSearchResults(state){
  let previewHtml = '';
  $.each(state.resultList, function(ind, obj) {
    previewHtml += '<li data-recipeid="'+obj.id+'"><a>'+
    '<img src="'+obj.imgUrl+'" alt="'+obj.title+'">'+
    '<span>'+obj.title+'</span>'+
    // '<form><input type="submit"></form>'+
    '</li></a>';
  });
  $('#search-results').html(previewHtml);
}
