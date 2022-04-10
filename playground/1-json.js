const fs = require("fs");

// const book = {
//   title: "A Brief History of Time",
//   author: "Stephen Hawkings",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();

const user = JSON.parse(dataJSON);
user.name = "Jane Doe";
user.age = 10;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
