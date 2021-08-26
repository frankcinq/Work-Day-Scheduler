var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


var objDate = new Date();
    var hours = objDate.getHours();
    if(hours >= 9 && hours <= 17) {
        $("textarea").addClass("present");
    }
    else if(hours < 9) {
        $("textarea").addClass("past");
    }
    else {
        $("textarea").addClass("future");
    }