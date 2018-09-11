alert("You've opened the calculator! Click OK to get continue.");
alert("We will ask for the first number, the operation you wish to carry out, then the second number. The order goes as follows: first number-operation-second number. Click OK to get started.");

var num1 = Number(prompt('Please enter the first number.'));
var operation = prompt('Please enter the desired operation; choose from: (a)addition, (b)subtraction, (c)multiplication, (d)division');
var num2 = Number(prompt('Please enter your second number.'));

function addition(value1, value2) {
  var resultA = value1 + value2;
  return resultA;
}

function subtraction(value1, value2) {
  var resultB = value1 - value2;
  return resultB;
}

function multiplication(value1, value2) {
  var resultC = value1*value2;
  return resultC;
}

function division(value1, value2) {
  var resultD = value1/value2;
  return resultD;
}

switch (operation){
  case 'a':
  var answerA = addition(num1, num2);
  alert(+ num1 + "+" + num2 + "=" + answerA);
  break;

  case 'b':
  var answerB = subtraction(num1, num2);
  alert(+ num1 + "-" + num2 + "=" + answerB);
  break;

  case 'c':
  var answerC = multiplication(num1, num2);
  alert(+ num1 + "×" + num2 + "=" + answerC);
  break;

  case 'd':
  var answerD = division(num1, num2);
  alert(+ num1 + "÷" + num2 + "=" + answerD);
  break;
  default: alert("Oops! Looks like the 'operation' input is invalid! Be sure to only type either 'a', 'b', 'c' or 'd'. Click OK to reload the page and start again.")
  location.reload();
}
