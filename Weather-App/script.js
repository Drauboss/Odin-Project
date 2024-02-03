const API_KEY = "039b8b67b0a948c998b190227240302";
const baseURL = "http://api.weatherapi.com/v1/current.json";

/**
 *
 * @param {string} cityName
 * @returns {Promise<{CurrentTemp: number, City: string, Country: string, Condition: string, Icon: string, Humidity: number, Wind: number}>}
 */
async function getWeather(cityName) {
  showLoadingIcon();
  const response = await fetch(
    baseURL + `?key=${API_KEY}&q=${cityName}&lang=de`,
    {
      mode: "cors",
    }
  );
  const data = await response.json();
  console.log(data);
  if (data.error) {
    hideLoadingIcon();
    throw new Error(data.error.message);
  }
  const filteredData = {
    CurrentTemp: data.current.temp_c,
    City: data.location.name,
    Country: data.location.country,
    Condition: data.current.condition.text,
    Icon: data.current.condition.icon,
    Humidity: data.current.humidity,
    Wind: data.current.wind_kph,
  };
  console.log(filteredData);
  return filteredData;
}

function showLoadingIcon() {
  document.getElementById("loading-icon").style.display = "block";
}
function hideLoadingIcon() {
  document.getElementById("loading-icon").style.display = "none";
}

async function displayWeather(cityName) {
  try {
    document.getElementById("error").innerText = "";
    document.getElementById("weather").style.display = "none";

    const data = await getWeather(cityName);
    hideLoadingIcon();

    document.getElementById("weather").style.display = "block";

    document.getElementById("city").innerText = data.City;
    document.getElementById("country").innerText = data.Country;
    document.getElementById("temp").innerText = data.CurrentTemp + "°C";
    document.getElementById("condition").innerText = data.Condition;
    document.getElementById("icon").src = data.Icon;
    document.getElementById("humidity").innerText = data.Humidity + "%";
    document.getElementById("wind").innerText = data.Wind + " km/h";
  } catch (error) {
    console.error(error);
    hideLoadingIcon();
    document.getElementById("error").innerText = error.message;
  }
}
