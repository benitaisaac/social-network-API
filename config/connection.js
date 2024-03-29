const { connect, connection} = require('mongoose');

//Connection string
const connectionString = 'mongodb://127.0.0.1:27017/socialMediaDB';

connect(connectionString);

module.exports = connection;