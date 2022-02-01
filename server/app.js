const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/config');
const { auth, requiresAuth } = require('express-openid-connect');


dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({
    extended : false
}));

if(process.env.NODE_ENV  === 'development'){
    app.use(morgan('dev'));
}

app.get('/', (req, res)=>{
    res.send({
        error : false,
        msg : "Welcome to Thank you Post-IT"
    });
});


app.use('/message',require('./routes/message'));
app.use('/user',require('./routes/user'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}...`));
