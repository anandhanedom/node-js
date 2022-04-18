console.log("Client-side JS is loaded!");

const showDomOutput = (isLoading, error, data) => {
  if (isLoading) {
    messageOneElement.textContent = "Loading...";
    messageTwoElement.textContent = "";
  } else if (error) {
    messageOneElement.textContent = error;
    messageTwoElement.textContent = "";
  } else {
    messageOneElement.textContent = data.location;
    messageTwoElement.textContent = data.forecast;
  }
};

const fetchWeatherDetails = (location) => {
  showDomOutput(true);
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        return showDomOutput(false, data.error, null);
      }

      showDomOutput(false, null, data);
    })
    .catch((err) => showDomOutput(false, err));
};

const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const messageOneElement = document.querySelector("#messageOne");
const messageTwoElement = document.querySelector("#messageTwo");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = inputElement.value;
  if (location) {
    fetchWeatherDetails(location);
  }
});
