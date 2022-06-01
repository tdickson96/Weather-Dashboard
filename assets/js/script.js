// Weather variable to fetch the weather
let weather = {
    init: () => {
      document
        .getElementById('weatherBtn')
        .addEventListener('click', weather.fetchWeather);
    },

    // Variable array to build out the url api link
    fetchWeather: (event) => {
      // use city variable to fetch weather
      let city = document.getElementById('city').value;
      // Unique API key after signing up fopr One Call API
      let key = 'c2dc3a0143b15e98e4629214f9fb8420';
      let lang = 'en';
      let units = 'metric';
      // Appropriate query strings
      let url = `http://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${key}&units=${units}&lang=${lang}`;
    }
}

  weather.init();