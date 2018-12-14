$("#add-btn").on("click", function (event) {
  event.preventDefault();
  var newCharacter = {
    title: $("#title").val().trim(),
    url: $("#url").val().trim(),
    sso: getCookie("sso"),
    metadata: $("#metadata").val().trim(),
    typeid: $("#typeid").val().trim()
  };
  $.post("/api/new", newCharacter)
    .then(function (data) {
      console.log(data);
      alert("Adding character...");
    });
  $("#title").val("");
  $("#url").val("");
  $("#metadata").val("");
  $("#typeid").val("");
});
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}