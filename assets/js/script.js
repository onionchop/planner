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
