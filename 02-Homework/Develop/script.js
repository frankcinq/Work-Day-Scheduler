var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var timeIds = [];

$(".time-block").each(function () {
  timeIds.push(this.id);
  console.log(timeIds);
});

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

/*renderLastRegistered();

function renderLastRegistered() {
    var textArea = localStorage.getItem("textarea");
}
  */
for (var i = 0; i < textarea.length; i++)
  $(".saveBtn").on("click", function () {
    var textArea = document.querySelectorAll("textarea").value;
    console.log(textArea);
  });

function mySave() {
  var myContent = document.querySelector("textarea").value;
  localStorage.setItem("textarea", textarea);
}
function myLoad() {
  var myContent = localStorage.getItem("textarea");
  document.querySelectorAll("textarea").value = myContent;
}

//35 = value,
