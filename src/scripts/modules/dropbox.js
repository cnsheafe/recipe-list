// jshint esversion:6
const CLIENT_ID = 'myj4y8uy5mlsg9s';
const REDIRECT_URI = 'http://localhost/spoon-n-drop/build/';
const STORAGE_PATH = '/my-recipes.json';

export function OAuth(){
  let url = 'https://www.dropbox.com/oauth2/authorize?'+
  'response_type=token&'+
  'client_id='+CLIENT_ID+'&'+
  'redirect_uri='+REDIRECT_URI;
  window.location.replace(url);
}
/*GET and param urls used to avoid CORS pre-flight*/
export function getMyRecipes(state) {
  let ajaxSettings = {
    url: 'https://content.dropboxapi.com/2/files/download',
    method: 'GET',
    dataType: 'json',
    data: {
      authorization: 'Bearer '+ window.sessionStorage.getItem('accessToken'),
      arg: JSON.stringify({path: '/questions.json'}),
      reject_cors_preflight: true
    }
  };
  return $.ajax(ajaxSettings);
}

export function deleteFileHelper() {
  let ajaxSettings = {
    url: 'https://api.dropboxapi.com/2/files/delete',
    method: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({path: '/burt2.json'}),
    headers : {
      Authorization: 'Bearer '+window.sessionStorage.getItem('accessToken')
    }
  };
  return $.ajax(ajaxSettings);
}

export function postMyRecipes(state) {
  let jstring = JSON.stringify(state.myRecipes);
  let ajaxSettings = {
    url: 'https://content.dropboxapi.com/2/files/upload',
    method: 'POST',
    contentType: 'application/octet-stream',
    data: jstring,
    headers: {
      Authorization: 'Bearer '+window.sessionStorage.getItem('accessToken'),
      'Dropbox-API-Arg': JSON.stringify({path: '/burt2.json'})
    }
  };
  return $.ajax(ajaxSettings);
}
