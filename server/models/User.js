const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    _id : false,
    _id : String,
    name : {
        type: String,
        trim: true,
        required : true,
    },
    sessionToken : {
        type: [String],
        trim: true,
    },
    badges :{
        type : Object,
        bronze : {
            type : Number,
            default : 0,
        },
        silver : {
            type : Number,
            default : 0,
        },
        gold : {
            type : Number,
            default : 0,
        },
        diamond : {
            type : Number,
            default : 0,
        },
        platinum : {
            type : Number,
            default : 0,
        }
    },
    starred :{
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'Message',
    },
    picture : {
        type : String,
        trim : true,
    },
    given_name : {
        type : String,
        trim : true,
    },
    nickname : {
        type : String,
        trim : true,
    },
    family_name : {
        type : String,
        trim : true,
    }
})

const User = mongoose.model('User',UserSchema);
module.exports = User;