



function getRandomColor() {
  var colors = ['red', 'green', 'blue', 'Orange', 'yellow', 'Light blue','coral','lightgreen','Pink'];
  var index;
  var color;

var x =document.querySelectorAll("div");
var y=document.querySelectorAll("h1");
//var attributeV= ("background-color,"+ color);
//x[0].style.backgroundColor = "#AA0000";
//x[0].style.backgroundColor = color;
var i;
for (i = 0; i < x.length; i++) {
  index=Math.floor(Math.random() * 9);
  color= colors[index];
  x[i].style.backgroundColor = color;
  y[i].innerHTML=Math.floor(Math.random() * 9)+1;
}










/*x.setAttribute("background-color",color);*/
 /*document.getElementsByClassName("d1").style.backgroundColor=color;*/
// document.getElementsByClassName('.d1').backgroundColor = "#00000";
//"style", "background-color: black;"
 //document.body.style.backgroundColor = "#AA0000";

}

/*function setRandomColor() {
//  document.querySelectorAll("#colorpad").css("background-color", getRandomColor());
// document.getElementsByClassName("container").setAttribute("background-color", getRandomColor());
document.
document.querySelector("div").setAttribute("background-color", getRandomColor());
("
}*/
