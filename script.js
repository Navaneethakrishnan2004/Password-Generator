$(document).ready(function () {
  $("#generate-button").on("click", function () {
    var length = $("#password-length").val();
    var password = generatePassword(length);
    $("#password-display").val(password);
  });
});

function generatePassword(length) {
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * charset.length);
    password += charset.charAt(index);
  }
  return password;
}
