
delete_cookie('sso');
delete_cookie('name');

url = "https://ssologin.ssogen2.corporate.ge.com/logoff/logoff.jsp";

window.location.href = url;

function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}