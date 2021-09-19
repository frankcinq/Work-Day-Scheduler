var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var timeIds = [];

$(".time-block").each(function () {
  timeIds.push(this.id);
  console.log(timeIds);
});

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();
}

var objDate = new Date();
var hours = objDate.getHours();
console.log(hours);
for (var i = 0; i < timeIds.length; i++) {
  if (parseInt(timeIds[i]) === hours) {
    $("#" + timeIds[i]).addClass("present");
    console.log(timeIds[i]);
    console.log(hours);
  } else if (parseInt(timeIds[i]) < hours) {
    $("#" + timeIds[i]).addClass("past");
  } else {
    $("#" + timeIds[i]).addClass("future");
  }
}

var textArea = $("textarea");
var selected = [];

$.each(textArea, function () {
  selected.push($(this).val());
});

console.log(textArea);
console.log(selected);

function mySave() {
  var myContent = document.querySelector("textarea").value;
  localStorage.setItem("textarea", textarea);
}
function myLoad() {
  var myContent = localStorage.getItem("textarea");
  document.querySelectorAll("textarea").value = myContent;
}
