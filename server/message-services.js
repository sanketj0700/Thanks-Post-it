const cote = require('cote');
const Message = require('./models/Message');
const User = require('./models/User');
const connectDB = require('./config/config');

connectDB();

const responder = new cote.Responder({name : 'trial',key:'message'});
responder.on('create',async(req,res)=>{
    try{
        console.log(req);
        const message = new Message({
            user : req.message.user,
            card : req.message.card
        });
        const saveMessage = await message.save();
        
        const badge = `badges.${message.card.badges}`;

        for(i=0;i<message.card.dedicated.legth;i++){
            await User.findOneAndUpdate({_id : message.card.dedicated[i].email},{$inc :{badge : 1}});
        }
        res({
            error: false,
            msg : message._id
        });

    }catch(err){
        console.log(err);
        res({
            error : true,
            msg : err.message
        });
    }
});

responder.on('read',async(req,res)=>{
    try{
        const message = await Message.find({}).sort({_id : -1}).limit(40).skip(req.skip);
        res({
            error : false,
            msg : message
        })
    }catch(err){
        console.log(err);
        res({
            error : true,
            msg : err.message
        });
    }
});

responder.on('update',async(req,res)=>{
    try{
        const update = {
            card : req.update.card
        };

        const badge = `badges.${update.card.badges}`;

        const badge2 = `badges.${update.card.oldbadge}`;

        for(i=0;i<message.card.dedicated.legth;i++){
            await User.findOneAndUpdate({_id : message.card.dedicated[i].email},[{$inc :{badge : 1}},{$inc:{badge2 : -1}}]);
        }
        const message = await Message.findOneAndUpdate({
            _id : req.update.user
            },update,{
            new : false
        }).then(
            res({
                error : false,
                msg : "Updated !!!!!!!!",
            })
        );
    }catch(err){
        console.log(err);
        res({
            error : true,
            msg : err.message
        });
    }
});

responder.on('delete',async(req,res)=>{
    try{
         await Message.findOneAndRemove({_id : req.id}).then(
            res({
                error : false,
                msg : "Deleted !!!!!!!!",
            })
        );
    }catch(err){
        console.log(err);
        res({
            error : true,
            msg : err.message
        });
    }
});

responder.on('starredMessages',async(req,res)=>{
    try{
        await Message.find({_id : req.starred}).sort({_id : -1}).skip(req.skip).limit(10).then(data=>{
            res({
                error: false,
                msg : data
            })
        });

    }catch(err){
        console.log(err);
        res({
            error : true,
            msg : err.message
        });
    }
});

responder.on('search',async(req,res)=>{
    try{
        await Message.find({ $text : {$search : req.query}}).sort({_id : -1}).limit(50).skip(req.skip).then(data=>{
            res({
                error: false,
                data,
            })
        });
    }catch(err){
        console.log(err);
        res({
            error : true,
            msg : err.message
        });
    }  
});

responder.on('dedicatedTo',async(req,res)=>{
    try{
        await Message.find({"card.dedicated.email" : req.email}).sort({_id : -1}).limit(40).skip(req.skip).then(data=>{
            res({
                error : false,
                data
            });
        });
    }catch(err){
        console.log(err);
        res({
            error : true,
            msg : err.message
        });
    }
});
