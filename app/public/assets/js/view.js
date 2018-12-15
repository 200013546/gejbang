$("#character-search").on("keyup", function () {
  var searchedCharacter = $("#character-search")
    .val()
    .trim();
  $.get("/api/" + searchedCharacter, function (data) {
    console.log(data);
    $("#well-section").empty();
    if (!data) {
      $("#well-section").clear();
    }
    else {
      for (var i = 0; i < data.length; i++) {
        var linkShow = data[i].typeid;
        if (data[i].typeid === '') {
          linkShow = "Link";
        }
        linkShow += " - Title: " + data[i].title;
        linkTitle = "Description: " + data[i].metadata + "\u000d\u000dURL: " + data[i].url;
        var linkResults = $("<a>");
        linkResults.html(linkShow);
        linkResults.attr("href", data[i].url).attr('target', 'newlink');;
        linkResults.attr("title", linkTitle).attr('target', 'newlink');;
        linkResults.append("<br>");
        $("#well-section").append(linkResults);
      }
    }
  });
});

// Check the login status via cookies

var loginShow = "Login";
var url = "http://isscindart01.admin.net.ge.com/gebang/register.php";
var aurl = "http://isscindart01.admin.net.ge.com/gebang/registera.php";
var sso = getCookieValue("sso");
var name = decodeURI(getCookieValue("name"));
var target = "_self";

if (sso != "") {
  loginShow = "Welcome " + name + " (" + sso + ")";
  url = "./logout.html";
  aurl = "./add.html";
  target = "logout";
}

var loginResults = $("<a>");
loginResults.html(loginShow);
loginResults.attr("href", url).attr('target', target);;
$("#login-section").html(loginResults);

var addResults = '<a class="btn btn-primary btn-md" href= ' + aurl + ' role="button" id="add-btn"><span class="fa fa-fire"></span> Add Link</a>';
$("#add-section").html(addResults);

function getCookieValue(a) {
  var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}