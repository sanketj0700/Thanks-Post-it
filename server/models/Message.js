const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
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
    dedicatedTo : [{
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
        img : {
            type : String,
            trim : true,
        }
    }],
    createdAt : {
        type: Date,
        default : Date.now()
    },
})
messageSchema.index({_id : 1,user : 1});
const Message = mongoose.model('Message',messageSchema);

module.exports = Message;