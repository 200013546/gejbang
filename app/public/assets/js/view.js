// var jbangcookie = require("jbangcookie");

$("#link-search").on("keyup", function () {
  var searchedLink = $("#link-search")
    .val()
    .trim();
  $.get("/api/" + searchedLink, function (data) {
    console.log(data);
    $("#well-section").empty();
    if (!data) {
      $("#well-section").clear();
    }
    else {
      // $("#well-section-header").text('<div class="card" id="result">');
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

        // var delResults = $("<a>");
        // delResults.html(linkShow);
        // delResults.attr("href", data[i].url).attr('target', 'newlink');;
        // delResults.attr("title", linkTitle).attr('target', 'newlink');;

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
  var loginName = name;
  loginShow = "Logout";
  url = "./logout.html";
  aurl = "./add.html";
  target = "_self";
  $("#login-name").html(loginName);
} else {
  var loginResults = $("<a>");
  loginResults.html(loginShow);
  loginResults.attr("href", url).attr('target', target);;
  // $("#login-section").html(loginResults);
  $("#login-name").html(loginResults);
}
var addResults = '<a class="btn btn-primary btn-md" href= ' + aurl + ' role="button" id="add-btn"><span class="fa fa-fire"></span> Add Link</a>';
$("#add-section").html(addResults);

function getCookieValue(a) {
  var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}