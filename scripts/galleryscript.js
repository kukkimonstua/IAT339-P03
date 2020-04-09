// ONHOVER CHANGE IMAGE for gallery https://stackoverflow.com/questions/10886828/changing-image-on-hover
function onHover() {
  document.getElementById("changeImg").src = "images/thecubegif.gif";
}

function offHover() {
  document.getElementById("changeImg").src = 'images/thecube.PNG';
}
// HAMBURGER DROPDOWN MENU code taken from https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp
function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}
