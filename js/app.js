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

function power(value1, value2) {
  var resultE = Math.pow(value1, value2);
  return resultE;
}

function squareRoot(value1) {
  var resultF = Math.sqrt(value1);
  return resultF;
}

alert("You've opened the calculator! Click OK to get continue.");
alert("We will ask for the first number, the operation you wish to carry out, then the second number. The order goes as follows: first number-operation-second number. Click OK to get started.");
var advancedOrBasic = prompt("Would you like the (a)advanced or (b)basic calculator?");

if (advancedOrBasic === "b") {
  var num1 = Number(prompt("Please enter the first number."));
  var operation = prompt("Please enter the desired operation; choose from: (a)addition, (b)subtraction, (c)multiplication, (d)division");
  var num2 = Number(prompt("Please enter your second number."));

  switch (operation){
    case "a":
    var answerA = addition(num1, num2);
    alert(+ num1 + " + " + num2 + " = " + answerA);
    break;

    case "b":
    var answerB = subtraction(num1, num2);
    alert(+ num1 + " - " + num2 + " = " + answerB);
    break;

    case "c":
    var answerC = multiplication(num1, num2);
    alert(+ num1 + " × " + num2 + " = " + answerC);
    break;

    case "d":
    var answerD = division(num1, num2);
    alert(+ num1 + " ÷ " + num2 + " = " + answerD);
    break;
    default: alert("Oops! Looks like the 'operation' input is invalid! Be sure to only type either 'a', 'b', 'c' or 'd'. Click OK to continue.")
    location.reload();
  }
} else if (advancedOrBasic === "a") {
  var num1 = Number(prompt("Please enter the first number."));
  var operation = prompt("Please enter the desired operation; choose from: (a)addition, (b)subtraction, (c)multiplication, (d)division, (e)power, (f)square root");

  if (operation === "f") {
    var answerF = squareRoot(num1);
    alert("√" + num1 + "=" + answerF);
  } else {
    var num2 = Number(prompt("Please enter your second number."));

    switch (operation){
      case "a":
      var answerA = addition(num1, num2);
      alert(+ num1 + " + " + num2 + " = " + answerA);
      break;

      case "b":
      var answerB = subtraction(num1, num2);
      alert(+ num1 + " - " + num2 + " = " + answerB);
      break;

      case "c":
      var answerC = multiplication(num1, num2);
      alert(+ num1 + " × " + num2 + " = " + answerC);
      break;

      case "d":
      var answerD = division(num1, num2);
      alert(+ num1 + " ÷ " + num2 + " = " + answerD);
      break;

      case "e":
      var answerE = power(num1, num2);
      alert(+ num1 + " to the power of " + num2 + " = " + answerE);
      break;

      default: alert("Oops! Looks like the 'operation' input is invalid! Be sure to only type either 'a', 'b', 'c', 'd', 'e', or 'f'. Click OK to reload the page and start again.")
      location.reload();
    }
  }
}
var repeat = prompt("Would you like to use the calculator again? (y/n)");
if (repeat === "y") {
  location.reload();
} else {
  alert("Thank you for using the calculator!");
}
