let city = document.querySelector(".city-title");
let dayTime = document.querySelector(".first");
let form = document.querySelector(".enter-city");
let cityInput = document.querySelector(".input-write");

function formatDate(dayNumber) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  for (let i = 0; i < days.length; i++) {
    if (dayNumber == i) {
      let dayName = days[i];
      return dayName;
    }
  }
}

function changeCity(event) {
  event.preventDefault();

  let input = document.querySelector(".input-write").value;
  city.innerHTML = input;
}

function dayTimeNow() {
  let now = new Date();
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let dayName = formatDate(day);

  dayTime.innerHTML = `${dayName} ${hours}:${minutes}, cloudy`;
}

//API call
function weather(response) {
  let temperature = document.querySelector(".temperature");
  let currentTemp = Math.round(response.data.temperature.current);
  
  city.innerHTML = response.data.city;
  temperature.innerHTML = currentTemp;
}

function apiCall(){
  let input = document.querySelector(".input-write").value;
  let apiKey = "562a514fd3f985ad310a1c7b9o64at0a";
  let url = `https://api.shecodes.io/weather/v1/current?query=${input}&key=${apiKey}&unit=metric`;

  axios.get(url).then(weather);
}



form.addEventListener("submit", changeCity);
form.addEventListener("submit", dayTimeNow);
form.addEventListener("submit", apiCall);

