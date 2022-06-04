alert('Hello World');

var i = 0;
var txt = 'Marketing & Operations Specialist';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hom-subtitle-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter();