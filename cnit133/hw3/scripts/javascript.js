//jQuery tabs
$(function() {
  $("#tabs").tabs();
});

//Instructions slider: Use jQuery to display 'Click to Show/Hide Instructions' above the table and upon clicking this then display 'The following webpage contains the heading, Student Grades, and uses a script that inputs a student's homework average, mid-term exam score, final exam score, and ACR (all as integers)'.
$(document).ready(function(){
    $("#dropDown").click(function(){
        $("#panel").slideToggle("slow");
    });
});

//Part 1 Create a webpage that contains the heading, Student Grades, and inputs a student's homework average, mid-term exam score, final exam score, and ACR (all as integers). Create a script that checks for valid input, i.e., that the input is between 0-100. If all input is valid then calculate and display the student's final average according to the formula: final average = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * ACR)

function studentGrades() {
  //declare the variables and get their input value from the from
  var hwAvg, midExam, finalExam, acr, finalGrade;
  hwAvg = document.getElementById('hwAvg').value;
  midExam = document.getElementById('midExam').value;
  finalExam = document.getElementById('finalExam').value;
  acr = document.getElementById('acr').value;
  //check if number and less than 0 or greater than 100
  if (isNaN(hwAvg) || isNaN(midExam) || isNaN(finalExam) || isNaN(acr) || hwAvg == "" || midExam == "" || finalExam == "" || acr == "" || hwAvg < 0 || hwAvg > 100 || midExam < 0 || midExam > 100 || finalExam < 0 || finalExam > 100 || acr < 0 || acr > 100) {
    //if it is then display an alert to enter a correct value
    window.alert("Enter a number value between 0 - 100 for each grade.")
  } else {
    //if it all inputted numbers are ok then calculate the student's final average according to the formula: final average = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * ACR) '.
    finalGrade = Math.round((.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * acr));
    // Using form text boxes, display the student's final average (rounded to an integer) and final letter grade
    if (finalGrade >= 90) {
      document.getElementById('finalGrade').innerHTML = "You received a " + finalGrade + "%. Great job! You got an A.";
    } else if (finalGrade >= 80) {
      document.getElementById('finalGrade').innerHTML = "You received a  " + finalGrade + "%. Good work! You got a B.";
    } else if (finalGrade >= 70) {
      document.getElementById('finalGrade').innerHTML = "You received a  " + finalGrade + "%. Nice effort. You got a C.";
    } // If the student's final grade is 'D' or 'F' then display "Student must retake the course". Be sure to check for valid input.
    else if (finalGrade >= 60) {
      document.getElementById('finalGrade').innerHTML = "You received a  " + finalGrade + "%. You must retake the course. You got a D.";
    } else {
      document.getElementById('finalGrade').innerHTML = "You received a  " + finalGrade + "%. You must retake the course. You failed the course.";
    }
  }
}

function clearAll() {
document.getElementById('hwAvg').value = "";
document.getElementById('midExam').value = "";
document.getElementById('finalExam').value = "";
document.getElementById('acr').value = "";
document.getElementById('finalGrade').value = "";
}
