const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

// Create Message
router.post('/create',async(req,res)=>{
    try{
        const message = new Message({
            user : req.body.id,
            data : req.body.message,
        })
        const saveMessage = await message.save();
        res.send({
            error: false,
            msg : message._id
        })
    }catch(err){
        console.log(err);
        res.send({
            error : true,
            msg : err.message
        });
    }
});

router.get('/read',async(req,res)=>{
    try{
        const message = await Message.find({}).sort({_id : -1}).limit(50).skip(req.body.skip);
        res.send({
            error : false,
            msg : message
        })
    }catch(err){
        console.log(err);
        res.send({
            error : true,
            msg : err.message
        });
    }
});

router.patch('/update',async(req,res)=>{
    try{
        const update = {
            data : req.body.message
        };
        const message = await Message.findOneAndUpdate({
            _id : req.body._id
            },update,{
            new : false
        }).then(
            res.send({
                error : false,
                msg : "Updated !!!!!!!!",
            })
        );
    }catch(err){
        console.log(err);
        res.send({
            error : true,
            msg : err.message
        });
    }
});

router.delete('/delete',async(req,res)=>{
    try{
         await Message.findOneAndRemove({_id : req.body._id}).then(
            res.send({
                error : false,
                msg : "Deleted !!!!!!!!",
            })
        );
    }catch(err){
        console.log(err);
        res.send({
            error : true,
            msg : err.message
        });
    }
});
 // Find messages for a given user_id
router.get('/user_id',async(req,res)=>{
    try{
        await Message.find({user : req.body.user_id}).limit(10).sort({_id : -1}).skip(req.body.skip).then(data=>{
            res.send({
                error: false,
                msg : data
            })
        });
    }catch(err){
        console.log(err);
        res.send({
            error : true,
            msg : err.message
        });
    }
});

// Find all the stared messages of the user

router.get('/staredMessages',async(req,res)=>{
    try{
        await Message.find({_id : req.body.stared}).sort({_id : -1}).skip(req.body.skip).limit(10).then(data=>{
            res.send({
                error: false,
                msg : data
            })
        });

    }catch(err){
        console.log(err);
        res.send({
            error : true,
            msg : err.message
        });
    }
});

module.exports = router;