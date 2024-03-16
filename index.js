const express = require('express');
const db = require('./config/connection.js');
const routes = require('./routes');

//what does this code do? 
// const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

db.once('once', () => {
    app.listen(PORT, () => {
        console.log(`API running on port ${PORT}`);
    });
});