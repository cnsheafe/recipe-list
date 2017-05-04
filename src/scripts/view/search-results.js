// jshint esversion: 6
export function showSearchResults(state){
  let previewHtml = '';
  $.each(state.resultList, (ind, result) => {
    previewHtml +=
    `<li class="row" data-recipeid=${result.id}>
      <span class="col-xs-4 ">
        <img src=${state.baseImgUri}${result.image}
        class="img-responsive"
        alt="${result.title}"></img>
      </span>
      <span class="col-xs-8 result-preview">
        <h3>${result.title}</h3>
        <span class="glyphicon glyphicon-time"></span>
        <span>${result.readyInMinutes}</span>
      </span>
    </li>`;
  });
  $('#search-results').html(previewHtml);
}
