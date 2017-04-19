// jshint esversion: 6
export function showSearchResults(state){
  let previewHtml = '';
  $.each(state.resultList, function(ind, obj) {
    previewHtml += '<li data-recipeid="'+obj.id+'"><a>'+
    '<img src="'+obj.imgUrl+'" alt="'+obj.title+'"></a>'+
    '<span><p>'+obj.title+'</p></span>'+
    // '<form><input type="submit"></form>'+
    '</li>';
  });
  $('#search-results').html(previewHtml);
}
