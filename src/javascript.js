//Date and time
let currentDate = new Date();
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayOfWeek = daysOfWeek[currentDate.getDay()];
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
if (hour < 10) {
  hour = "0" + hour;
}
if (minute < 10) {
  minute = "0" + minute;
}
let time = hour + ":" + minute;
let dateTime = dayOfWeek + " " + time;
document.getElementById("current-time").innerHTML = dateTime;

//Searching form ????

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city-name");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value + " Today:";
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", search);

//convert to farenheit
let temp = document.querySelector(".temp");
let tempValue = parseInt(temp.textContent);
let tempUnit = temp.textContent.slice(-1);

temp.addEventListener("click", () => {
  if (tempUnit === "C") {
    let tempF = Math.round((tempValue * 9) / 5 + 32);
    temp.innerHTML = `<strong>${tempF}&deg;F</strong>`;
    tempUnit = "F";
  } else {
    temp.innerHTML = `<strong>${tempValue}&deg;C</strong>`;
    tempUnit = "C";
  }
});
