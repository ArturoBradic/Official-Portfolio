var i = 0;
var txt = "Hello. Welcome to my Portfolio";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("introduction-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

console.log("another test");
