// jshint esversion:6
export function renderPage() {
  $('#create-recipe').toggleClass('hide');
  $('#create-recipe').toggleClass('viewable');
  $('main').has('.viewable').toggleClass('hide');


}
