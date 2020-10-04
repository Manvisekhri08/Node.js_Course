// CRUD create, read, update, delete

// const mongodb = require('mongodb')

// const MongoClient = mongodb.MongoClient

// const ObjectID = mongodb.ObjectID

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.getTimestamp())
// console.log(id.toHexString().length)

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client ) => {
    if (error) {
       return console.log('Unable to connect to the database!')
    }

    const db = client.db(databaseName)

    db.collection('users').findOne({
        name: 'Larry',
        age: 26
    }, (error, result) => {
            if (error) {
                return console.log('Unable to find the data')
            }
            console.log(result)
    })
    
})