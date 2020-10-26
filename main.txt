



function getRandomColor() {
  var colors = ['red', 'green', 'blue', 'Orange', 'yellow', 'Light blue','White','Gray','Pink'];
  var index=Math.floor(Math.random() * 9);
  var color= colors[index];

document.querySelector("div").setAttribute("background-color", color);

}

/*function setRandomColor() {
//  document.querySelectorAll("#colorpad").css("background-color", getRandomColor());
// document.getElementsByClassName("container").setAttribute("background-color", getRandomColor());
document.
document.querySelector("div").setAttribute("background-color", getRandomColor());
("
}*/
