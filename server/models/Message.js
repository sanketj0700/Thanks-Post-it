const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user : {
        type : String,
        required : true,
        ref : 'User'
    },
    card : {
        type : Object,
        data : {
            type : String,
            required : true,
            trim : true
        },
        title : {
            type : String,
            required : true,
            trim : true,
        },
        image : {
            type : String,
            trim : true
        },
        dedicated : [{
            name : {
                type : String,
                trim : true,
                // required : true,
            },
            email : {
                type : String,
                trim : true,
                // required : true,
            },
            picture : {
                type : String,
                trim : true,
            },
            given_name : {
                type : String,
                trim : true,
            }
        }],
        author : {
            type :Object,
            name : {
                type : String,
                trim : true,
                // required : true,
            },
            email : {
                type : String,
                trim : true,
                // required : true,
            },
            picture : {
                type : String,
                trim : true,
            },
            given_name : {
                type : String,
                trim : true,
            }
        },
        badges : String
    },
    createdAt : {
        type: Date,
        default : Date.now()
    },
})
messageSchema.index({_id : 1,user : 1});
const Message = mongoose.model('Message',messageSchema);

module.exports = Message;