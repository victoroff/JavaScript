const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const router = require('./routes/users');
const app = express();
const config = require('./config/database');

mongoose.connect(config.database,{ 
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('connected to db: ' +config.database); 
});

mongoose.connection.on('error', (errMsg) => {
    console.log('Database error: ' +errMsg); 
});

//port number
const port = 6360;

//CORS middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyParser.json());

//passport 
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//users
app.use('/users',router);

//index route
app.get('/',(req,res,next) => {
    res.send('hello')
})

//start server
app.listen(port, () => {
    console.log('server is runnning!');
});