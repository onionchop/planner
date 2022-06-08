var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currDay").text(currentDay);

var rows = document.getElementsByClass('row time-block past');
