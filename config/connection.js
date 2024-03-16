const { connect, connection} = require('mongoose');

//I might need to change this to mongodb atlas
const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

module.exports = connection;