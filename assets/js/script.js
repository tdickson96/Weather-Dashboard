// Today's date at the top of the calendar 
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
 setInterval(() => {
    let timeNow = moment().format("h:mm:ss");
    $("#timeNow").text(timeNow);  
}, 1000);