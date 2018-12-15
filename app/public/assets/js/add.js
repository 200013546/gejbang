
// Send to DB from here
$("#add-btn").on("click", function (event) {
  event.preventDefault();
  var newCharacter = {
    title: $("#title").val().trim(),
    url: $("#url").val().trim(),
    sso: getCookie("sso"),
    metadata: $("#metadata").val().trim(),
    view: checkView(($("#view").is(':checked'))),
    typeid: getType($("#typeid").val().trim(), $("#typex").val())
  };

  // data integrity check

  if (!/^[0-9A-Za-z\s\-]+$/.test(newCharacter.title)) {
    return alert("invalid character in Title field.  Upper and lower case letters and numbers please.")
  }
  if (!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test($("#url").val())) {
    return alert("invalid link in URL field.  Please check and re-enter.")
  }
  if (!/^[0-9A-Za-z\s\-]+$/.test(newCharacter.metadata)) {
    return alert("invalid character in Description field.  Upper and lower case letters and numbers please.")
  }
  if (!/^[0-9A-Za-z\s\-]+$/.test(newCharacter.typeid)) {
    return alert("invalid character in Type field.  Upper and lower case letters and numbers please.")
  }


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



// Need cookie value for sso into DB
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

// Need to determine type from dropdown or new
function getType(typeid, typex) {
  if (typeid != '') {
    return typeid
  } else {
    return typex
  }
}

// True or false for checkbox
function checkView(view) {
  if (view == true) {
    return 1
  } else {
    return 0
  }
}