const cote = require('cote');
const Message = require('./models/Message');
const User = require('./models/User');
const connectDB = require('./config/config');

connectDB();

const responder = new cote.Responder({name : 'trial 2',key:'user'});

responder.on('all',async(req,res)=>{

    await User.find({}).sort({name : 1}).then(users => {
        res({
            error : false,
            users,
        })
    })

});

responder.on('addToStarred',async(req,res)=>{
    try{
        const update = {
            $addToSet : {
                starred : req.message_id
            },
        };
        await User.findByIdAndUpdate({ _id : req.email},update,{
            new : true,
        }).then(
            res({
                error: false,
                msg : "Added to Starred Message!!!!"
            })
        )   
    }catch(err){
        console.log(err);
        res({
            error : true,
            msg : err.message
        });
    }
});

responder.on('removeFromStarred',async(req,res)=>{
    try{
        const update = {
            $pull : {
                starred : req.message_id
            },
        };
        await User.findByIdAndUpdate({ _id : req.email},update,{
            new : true,
        }).then(
            res({
                error: false,
                msg : "Removed from Starred Message!!!!"
            })
        )   
    }catch(err){
        console.log(err);
        res({
            error : true,
            msg : err.message
        });
    }
})
