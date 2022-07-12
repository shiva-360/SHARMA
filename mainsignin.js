function validate() {
  var x = document.forms["myform"]["input1"].value;
  var name_error = document.getElementById("name_error");
  if (x == "") {
    name_error.style.visibility = "visible";
    return false;
  } else {
    alert("your data saved sucessfully");
    return true;
  }
}








function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

