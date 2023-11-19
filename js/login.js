let x = document.getElementById("password");

function myFunctionLogin() {
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}