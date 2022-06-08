var currentHr = (moment().hour());
var description = $(".description");

function currentDate(){
    var currentDay = document.querySelector("#currentDay")
    var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDay.innerHTML = time;
}


function hrTimes() {
    for (i = 9; i < 18; i++){
        var rowHr = $("#hour-${i}");
        if (i < currentHr) {

            rowHr.addClass("past")

        } else if (i === currentHr) {
            rowHr.addClass("present");

        } else if (i > currentHr) {
            rowHr.addClass("future");
        }
    }
}

hrTimes();
currentDate();
setInterval(currentDate, 1000);
setInterval(hrTimes, 15000);

function savedDes(event) {
    setInterval(displaySaved, 1000);
}

function displaySaved(){
    if $("#saved").hasClass("hide"){
        $("#saved").removeClass("hide").addClass("show");
    }
}


var target = event.target;
var targetDes = $(target).siblings(".description").val();
var trimmedDes = $.trim(targetDes);
var hour = $(target).parent(".time-block").attr("id");
console.log(hours);


// local storage
localStorage.setItem(hour, trimmedDes);

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

