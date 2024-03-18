const connection = require('../config/connection');
const  {User} = require('../models');
const Thought = require('../models/Thought');

//require arrays of data from data.js
const {usersData, thoughtData } = require('./data');

console.log(thoughtData);
console.log(usersData);

//An error event listener is set up on the connection object to handle any errors.
connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log("connected");
//Delete collections if they exist 
    //create a user variable to check if there is data in the database
    let userCheck = await connection.db.listCollections({ name: 'users'}).toArray();
    // if there is anything in the array, it will delete the collection
    if(userCheck.length){
        //note that mongoDB will make the collection name plural 
        await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts'}).toArray();
    //if there are any elements in the thought array, delete the collection
    if(thoughtCheck.length){
        await connection.dropCollection('thoughts');
    }

    //create an empty array to hold users
    thoughts = [];
    users = [];

     await User.insertMany(usersData);
     await Thought.insertMany(thoughtData);

    process.exit(0);

})

