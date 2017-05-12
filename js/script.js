/*
    events - things that happens on your website
 
    this
 */

function changeColor()
{
   resultElement.style.color = "red";
}

function changeColorOut()
{
   resultElement.style.color = "black";
}

var resultElement = document.getElementById("result");
var plusElement = document.getElementById("plus");
var minusElement = document.getElementById("minus");

plusElement.onclick = changeColor;

minusElement.onclick = changeColorOut;
