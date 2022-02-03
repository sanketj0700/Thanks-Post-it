const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    _id : false,
    _id : String,
    fullName : {
        type: String,
        trim: true,
        required : true,
    },
    sessionToken : {
        type: [String],
        trim: true,
    },
    badges :{
        tpye : Map,
        of : Number
    },
    starred :{
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'Message',
    },
    profilePicture : {
        type : String,
        trim : true,
    }
})

const User = mongoose.model('User',UserSchema);
module.exports = User;