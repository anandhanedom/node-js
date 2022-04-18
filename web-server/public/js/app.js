console.log("Client-side JS is loaded!");

fetch("http://localhost:3000/weather?address=wayanad")
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      return console.log(data.error);
    }

    console.log(data.location);
    console.log(data.forecast);
  })
  .catch((err) => console.log(err));
