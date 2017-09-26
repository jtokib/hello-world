//part2: function called process that takes 3 inputs and caculates the sum, average, product, smallest, and largest.

function part2() {

  //define all the variables

  var number1, number2, number3, sum, average, product, smallest, largest;

  // check if input is a numbers, else convert input to integer

  if (isNaN(document.forms["numbersForm"].elements["num1"].value)) {
    alert("The first number not a number! Try again.")
  } else {
    number1 = parseInt(document.forms["numbersForm"].elements["num1"].value);
  }

  if (isNaN(document.forms["numbersForm"].elements["num2"].value)) {
    alert("The second number is not a number! Try again.")
  } else {
    number2 = parseInt(document.forms["numbersForm"].elements["num2"].value);
  }

  if (isNaN(document.forms["numbersForm"].elements["num3"].value)) {
    alert("The third number is not a number! Try again.")
  } else {
    number3 = parseInt(document.forms["numbersForm"].elements["num3"].value);
  }

  //calculate the sum, average, product, smallest and largest

  sum = number1 + number2 + number3;
  average = sum/3;
  product = number1 * number2 * number3;
  smallest = Math.min(number1, number2, number3);
  largest = Math.max(number1, number2, number3);

  // output results to div class results

  document.getElementById("results").innerHTML= ("The sum is: " + sum + "<br>The average is: " + average + "<br>The product is: " + product + "<br>The smallest number is: " + smallest + "<br>The largest number is: " + largest);
}

// clear the results div when reset is clicked

function res() {
  document.getElementById("results").innerHTML = "The sum, average, product, smallest number and largest number will be displayed here after you click submit.";
}

//inputs 5 numbers and determines and displays the count of the negative numbers, the number of positive numbers, and the number of zeros.
function part3() {

  //declare variables
  var n1, n2, n3, n4, n5, positiveNumber, negativeNumber, zeroNumber

  //check if integer then convert input to integer
  if (isNaN(document.getElementById('number1').value)) {
    alert("The first number isn't a number! Try again.");
  } else {
    n1 = parseInt(document.getElementById('number1').value);
  }

  if (isNaN(document.getElementById('number2').value)) {
    alert("The second number isn't a number! Try again.");
  } else {
    n2 = parseInt(document.getElementById('number2').value);
  }

  if (isNaN(document.getElementById('number3').value)) {
    alert("The third number isn't a number! Try again.");
  } else {
    n3 = parseInt(document.getElementById('number3').value);
  }

  if (isNaN(document.getElementById('number4').value)) {
    alert("The fourth number isn't a number! Try again.");
  } else {
    n4 = parseInt(document.getElementById('number4').value);
  }

  if (isNaN(document.getElementById('number5').value)) {
    alert("The fifth number isn't a number! Try again.");
  } else {
    n5 = parseInt(document.getElementById('number5').value);
  }

  //createa function to check if the integer is positive, negative, or zero then add to positive, negative, or zero number count
  positiveNumber = 0
  negativeNumber = 0
  zeroNumber = 0

  function checkNumber(number) {
    if (number > 0) {
      positiveNumber += 1;
    } else if (number == 0){
      zeroNumber += 1;
    } else {
      negativeNumber += 1;
    }
  }

  //run the checkNumber function on each of the inputs

  checkNumber(n1);
  checkNumber(n2);
  checkNumber(n3);
  checkNumber(n4);
  checkNumber(n5);

  //store the findings

  var positives = "You entered " + positiveNumber + " positive number(s), ";
  var negatives = negativeNumber + " negative number(s), ";
  var zeros = "and " + zeroNumber + " zero(s).";

  // output results to div class results

  document.getElementById("part3results").innerHTML= (positives + negatives + zeros);
}

// clear the results for part3 div when reset is clicked

function part3Res() {
  document.getElementById("part3results").innerHTML = "Cleared! Try again!";
}
//button to fade the results in hw2part3 (note remove Bootstrap jQuery src to make this funtion work)

$(document).ready(function() {
  $( "#fadeToButton" ).click(function() {
    $( "#part3results" ).fadeTo("slow", 0.15);
  });
});

//part 4: document.write table with numbers (1-6) and their squares and cubes

function part4() {
  document.write("<table><tr><td>Number</td><td>Squared</td><td>Cubed</td></tr><tr><td>1</td><td>" + Math.pow(1,2) + "</td><td>" + Math.pow(1,3) + "</td></tr><tr><td>2</td><td>" + Math.pow(2,2) + "</td><td>" + Math.pow(2,3) + "</td></tr><tr><td>3</td><td>" + Math.pow(3,2) + "</td><td>" + Math.pow(3,3) + "</td></tr><tr><td>4</td><td>" + Math.pow(4,2) + "</td><td>" + Math.pow(4,3) + "</td></tr><tr><td>5</td><td>" + Math.pow(5,2) + "</td><td>" + Math.pow(5,3) + "</td></tr><tr><td>6</td><td>" + Math.pow(6,2) + "</td><td>" + Math.pow(6,3) + "</td></tr></table>")
}

//part four: a script containing getElementById and innerHTML, and a form button to create and write a similar table of squares and cubes using numbers 7-10.

function partFour() {
  document.getElementById('partFour').innerHTML = "<table><tr><td>Number</td><td>Squared</td><td>Cubed</td></tr><tr><td>7</td><td>" + Math.pow(7,2) + "</td><td>" + Math.pow(7,3) + "</td></tr><tr><td>8</td><td>" + Math.pow(8,2) + "</td><td>" + Math.pow(8,3) + "</td></tr><tr><td>9</td><td>" + Math.pow(9,2) + "</td><td>" + Math.pow(9,3) + "</td></tr><tr><td>10</td><td>" + Math.pow(10,2) + "</td><td>" + Math.pow(10,3) + "</td></tr></table>"
}

//reset the div on part four

function part4reset() {
  document.getElementById('partFour').innerHTML = " "
}

//calculate exchange rates

function calculate() {
  //set exchange rates
  var prate = 0.77521, crate = 1.34461, erate = 0.88754, yrate = 109.350, orate = 18.2806;
  //get dollar amount entered
  var amount = document.forms["exchangeRate"].elements["amount"].value;
  //create currency variables and multiple dollar amount times rate
  var pound = amount * prate;
  var canada = amount * crate;
  var euro = amount * erate;
  var yen = amount * yrate;
  var peso = amount * orate;

  //add converted amounts to the output table
  //pound
  document.getElementById('prate').innerHTML = "$1 = " + prate;
  document.getElementById('pound').innerHTML = "&pound;" +  pound.toFixed(2);
  //candian dollar
  document.getElementById('crate').innerHTML = "$1 = " + crate;
  document.getElementById('canada').innerHTML = "&dollar;" +  canada.toFixed(2);
  //euro
  document.getElementById('erate').innerHTML = "$1 = " + erate;
  document.getElementById('euro').innerHTML = "&euro;" + euro.toFixed(2);
  //yen
  document.getElementById('yrate').innerHTML = "$1 = " + yrate;
  document.getElementById('yen').innerHTML = "&yen;" + yen.toFixed(2);
  //peso
  document.getElementById('orate').innerHTML = "$1 = " + orate;
  document.getElementById('peso').innerHTML = "&dollar;" + peso.toFixed(2);
}

//clears the amount column in the extra credit page when reset is pressed
function resetEc() {
  document.getElementById('pound').innerHTML = "";
  document.getElementById('canada').innerHTML = "";
  document.getElementById('euro').innerHTML = "";
  document.getElementById('yen').innerHTML = "";
  document.getElementById('peso').innerHTML = "";
}

//extra credit slider panel

$(document).ready(function(){
    $("#dropDown").click(function(){
        $("#panel").slideToggle("slow");
    });
});

//give the input field a highlight border

$(document).ready(function() {
    $('#dollars').focus(function() {
        $(this).css('border','#39FF14 solid 5px');
	});     // end focus

});
