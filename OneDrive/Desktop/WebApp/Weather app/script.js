

const apiKey = '2f9ebc0fe91f10c86cc7c12eadffccd2';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';


const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if(location) {
        fetchWeather(location);
    }
});

async function fetchWeather(location) {
    try {
        const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
        }

        const data = await response.json();

        // Log the data to the console for debugging
        console.log('Weather Data:', data);

        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = data.weather[0].description;
        humidityElement.textContent = data.main.humidity;
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
}
