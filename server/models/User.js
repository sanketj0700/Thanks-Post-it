const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    email : {
        type: String,
        trim: true,
    },
    fullName : {
        type: String,
        trim: true
    },
    role: {
        type: String,
        trim: true,
    },
    sessionToken : {
        type: [String],
        trim: true,
    },
    badges :{
        tpye : Map,
        of : Number
    },
    stared :{
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'Message',
    },
})

const User = mongoose.model('User',UserSchema);
module.exports = User;