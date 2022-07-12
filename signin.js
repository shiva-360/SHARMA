function showname() {
  var a = document.getElementById("pswrd");
  var b = document.getElementById("cpswrd");
  if (a.type === "password" && b.type === "password") {
    a.type = "text";
    b.type = "text";
  }
  else {
    a.type = "password";
    b.type = "password";
  }
}


function validateform() {
  var name = document.forms["myform"]["name"].value;
  var email = document.forms["myform"]["email"].value;
  var password = document.forms["myform"]["password"].value;
  var name_error = document.getElementById("name_error");
  var email_error = document.getElementById("email_error");
  var password_error = document.getElementById("password_error");
  if (name == "" && email == "" && password == "") {

    name_error.style.visibility = "visible";
    email_error.style.visibility = "visible";
    password_error.style.visibility = "visible";
    return false;
  }
  else if (name == "") {

    name_error.style.visibility = "visible";
    return false;
  }

  else if (email == "") {
    email_error.style.visibility = "visible";
    return false;
  }
  else if (password == "") {
    password_error.style.visibility = "visible";
    return false;
  }
  else {
    alert("your data saved sucessfully");
    return true;
  }
}