
alert('yes');
$.post("/login", newCharacter)
.then(function(data) {
  console.log(data);
  alert("Adding character...");
});


// console.log(process.env);
// $.post("/login", function (req, res) {
    // var login = req.body;
    // var sso = login.sso;
    // var name = login.name;
   //  alert("Data: " + req + "\nStatus: " + res);
    // console.log(login.name);
    // login.create({
    //     name: login.name,
    //     sso: login.sso
    // });
// });
// alert(sso);