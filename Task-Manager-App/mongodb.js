// CRUD create, read, update, delete

const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client ) => {
    if (error) {
       return console.log('Unable to connect to the database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Louis',
    //     age: 28
    // }, (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert data')
    //         }

    //         console.log(result.ops)
    // })

    // db.collection("users").insertMany([
    //   {
    //     name: "Harry Styles",
    //     age: 26,
    //   },
    //   {
    //     name: "Zayn Malik",
    //     age: 27,
    //   },
    //   {
    //     name: "Louis Tomlinson",
    //     age: 28,
    //   },
    //   {
    //     name: "Liam Payne",
    //     age: 27,
    //   },
    //   {
    //     name: "Niall Horan",
    //     age: 27,
    //   }
    // ], (error, result) => {
    //         if (error) {
    //             return console.log("Unable to insert data");
    //         }
    //         console.log(result.ops)
    // });
db.collection("tasks").insertMany(
  [
    {
      description: "Grocery Shopping",
      completed: true,
    },
    {
      description: "Studying",
      completed: false,
    },
    {
      description: "Playing",
      completed: true,
    }
  ],
  (error, result) => {
    if (error) {
      return console.log("Unable to insert tasks");
    }
    console.log(result.ops);
  }
);
    
})