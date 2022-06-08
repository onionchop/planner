var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currDay").text(currentDay);

var currentHr = (moment().hour());
var description = $(".description");

function hrTimes() {
    for (i = 9; i < 18; i++){
        var rowHr = $("hour-${i}");
        if (i < currentHr) {
            rowHr.addClass("past")
        } else if (i === currentHr) {
            rowHr.addClass("present");
        } else (i > currentHr) {
            rowHr.addClass("future");
        }
    }
}

