
function getWeather() {
  const apiKey = '222df1a0c4f065452480e17a8eb3b251';

  const city = document.getElementById('cityInput').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weather-info');

      if (data.cod === '200') {
        // accepted response. Do something else.
        weatherInfo.style.color = 'yellow';
      } else if (data.cod === '404') {
        weatherInfo.textContent = 'City not found. Please try again.';
        weatherInfo.style.color = 'blue';
      } else {
        const temperature = (data.main.temp - 273.15).toFixed(2);
        const description = data.weather[0].description;
         const humidity = data.main.humidity;
        weatherInfo.innerHTML = `<p>Temperature: ${temperature} °C</p>
        <p>Description: ${description}</p>
           <p>Humidity: ${humidity}</p>`;
     

      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.textContent = 'An error occurred. Please try again later.';
      weatherInfo.style.color = 'green';
    });
}
