console.log("Client-side JS is loaded!");

const fetchWeatherDetails = (location) => {
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        return console.log(data.error);
      }

      console.log(data.location);
      console.log(data.forecast);
    })
    .catch((err) => console.log(err));
};

const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = inputElement.value;
  if (location) {
    fetchWeatherDetails(location);
  }
});
