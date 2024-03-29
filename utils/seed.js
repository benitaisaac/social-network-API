const connection = require("../config/connection");
const { User } = require("../models");
const Thought = require("../models/Thought");

//require arrays of data from data.js
const { usersData, thoughtData } = require("./data");

//An error event listener is set up on the connection object to handle any errors.
connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  //Delete collections if they exist
  //create a user variable to check if there is data in the database
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  // if there is anything in the array, it will delete the collection
  if (userCheck.length) {
    //note that mongoDB will make the collection name plural
    await connection.dropCollection("users");
  }

  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  //if there are any elements in the thought array, delete the collection
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  const seedUsers = async () => {
    try {
      const users = await User.insertMany(usersData); // Insert users into the database

      // Assign random friends to each user
      users.forEach((user) => {
        const friends = users.filter(
          (friend) => friend._id.toString() !== user._id.toString()
        );
        const numFriends = Math.floor(Math.random() * 4) + 1;
        user.friends = friends.slice(0, numFriends).map((friend) => friend._id);
      });

      await Promise.all(users.map((user) => user.save())); // Save the updated users with friends
      console.log("Database seeded successfully");
      return users;
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  };

  const users = await seedUsers();

  const thoughts = await Thought.insertMany(thoughtData);

  for (let i = 0; i < users.length; i++) {
    users[i].thoughts.push(
      ...thoughts
        .filter((thought) => thought.username === users[i].username)
        .map((thought) => thought._id)
    );
    await users[i].save();
  }

  process.exit(0);
});
