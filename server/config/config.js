const moongose = require('mongoose')

const connectDB = async() =>{
    try {
        const connection = await moongose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log(`Connected to Database : ${connection.connection.host}`);
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;