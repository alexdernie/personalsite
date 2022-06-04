var i = -1;
var txt = 'Marketing & Automations Specialist';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hom-subtitle-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}