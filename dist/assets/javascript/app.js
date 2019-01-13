var i = 0;
var txt = "Hello. Welcome to my Portfolio";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greeting-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}