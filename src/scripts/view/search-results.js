// jshint esversion: 6
export function showSearchResults(state){
  let previewHtml = '';
  $.each(state.resultList, (ind, result) => {
    previewHtml +=
    `<li data-recipeid=${result.id}>
      <a><img src=${state.baseImgUri}${result.image} alt=${result.title}></a>
      <span><p>${result.title}</p></span>
    </li>`;
  });
  $('#search-results').html(previewHtml);
}
