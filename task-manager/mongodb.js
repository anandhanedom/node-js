// CRUD operations

const mongodb = require("mongodb");
const { MongoClient, ObjectID } = mongodb;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);

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
    //     name: "Sundar",
    //     age: 29,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     { name: "Jane Doe", age: 22 },
    //     { name: "Jack Doe", age: 26 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert users!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     { description: "Learn node", completed: false },
    //     { description: "Pot plants", completed: true },
    //     { description: "Watch football", completed: false },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").findOne({ name: "Sundar" }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch user!");
    //   }

    //   console.log(user);
    // });

    // db.collection("users")
    //   .find({ age: 26 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log("Unable to fetch users!");
    //     }

    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 26 })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log("Unable to fetch user count!");
    //     }

    //     console.log(count);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("6262ee3828ba5433f149d4a0"),
    //     },
    //     {
    //       // $set: {
    //       //   name: "Mike",
    //       // },
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
