// CRUD operations

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "John Doe",
    //     age: 24,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("users").insertMany(
      [
        { name: "Jane Doe", age: 22 },
        { name: "Jack Doe", age: 26 },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert users!");
        }

        console.log(result.ops);
      }
    );

    db.collection("tasks").insertMany(
      [
        { description: "Learn node", completed: false },
        { description: "Pot plants", completed: true },
        { description: "Watch football", completed: false },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert tasks!");
        }

        console.log(result.ops);
      }
    );
  }
);
