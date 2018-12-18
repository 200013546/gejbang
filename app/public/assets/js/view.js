$("#link-search").on("keyup", function () {
  var searchedLink = $("#link-search")
    .val()
    .trim();
  $.get("/api/" + searchedLink, function (data) {
    // console.log(data);
    $("#well-section").empty();
    if (!data) {
      $('#well-section').hide();
    }
    else {
      $('#well-section').show();
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

// If not logged in
var loginShow = "Login";
var url = "http://isscindart01.admin.net.ge.com/gebang/register.php";
var aurl = "http://isscindart01.admin.net.ge.com/gebang/registera.php";
var sso = getCookieValue("sso");
var name = decodeURI(getCookieValue("name"));
var target = "_self";

if (sso != "") {
  var loginName = name;
  loginShow = "(Logout)";
  url = "./logout.html";
  aurl = "./add.html";
  target = "_self";
  var loginResults = $("<a>");
  loginResults.attr("href", url).attr('target', target);
} else {
  var loginResults = $("<a>");
  loginResults.attr("href", url).attr('class', 'navbar-brand').attr('target', target);
}

loginResults.html(loginShow);
$("#login-section").html(loginResults);
$("#login-name").html(loginName);

var addResults = '<a href= ' + aurl + ' class="navbar-brand" id="add-btn">Add Link</a>';
$("#add-section").html(addResults);

function getCookieValue(a) {
  var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}