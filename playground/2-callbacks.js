setTimeout(() => {
  console.log("Two seconds are up!");
}, 2000);

const names = ["John", "Jen", "Andrew"];
const shortNames = names.filter((name) => name.length <= 4);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    callback(data);
  }, 2000);
};

geocode("Philadelphia", (data) => {
  console.log(data);
});

const add = (x, y, callback) => {
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 2000);
};

add(1, 2, (sum) => {
  console.log("**************");
  console.log(sum);
  console.log("**************");
});
