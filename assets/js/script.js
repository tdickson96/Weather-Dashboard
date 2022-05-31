// Today's date at the top of the calendar 
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// Current time
setInterval(() => {
    let timeNow = moment().format("h:mm:ss");
    $("#timeNow").text(timeNow);  
}, 1000);

// Build API call for OneWeather API
let weather = {
    init(): () => {
        document
            .getElementById('searchBtn')
            .addEventListener('click', app.fetchWeatherPlease);
    },

    fetchWeatherPlease: () => {
        // Key value pairs
        
    }
}

weather.init();