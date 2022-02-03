const express = require('express');
const Message = require('../models/Message');
const {authorizeAccessToken} = require('../middleware/auth');

const router = express.Router();

// 
// @desc        Creates Message
// @route       POST /message/create
router.post('/create',authorizeAccessToken,async(req,res)=>{
    try{
        const message = new Message({
            user : req.body.id,
            title : req.body.title,
            data : req.body.message,
            dedicatedTo : req.body.dedicatedTo
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

// @desc  Returns all the message according to timeline in descending order
// @route  GET /message/read

router.get('/read',authorizeAccessToken,async(req,res)=>{
    try{
        const message = await Message.find({}).sort({_id : -1}).limit(40).skip(req.body.skip);
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

// @desc        Updates the message data
// @route       PATCH /message/update

router.patch('/update',authorizeAccessToken,async(req,res)=>{
    try{
        const update = {
            data : req.body.message,
            title : req.body.title
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

// @desc        Deletes the entire message
// @route       DELETE /message/delete

router.delete('/delete',authorizeAccessToken,async(req,res)=>{
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
 // @desc        Find messages for a given user
 // @route      GET /message/user_id

router.get('/user_id',authorizeAccessToken,async(req,res)=>{
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

// @desc         Find all the stared messages of the user
// @route        GET /message/staredMessages

router.get('/staredMessages',authorizeAccessToken,async(req,res)=>{
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

// @desc        searches for a particular query in search bar
// @route       GET /message/search

router.get('/search',authorizeAccessToken,async(req,res)=>{
    await Message.find({ $text : {$search : req.body.query}}).sort({_id : -1}).limit(50).skip(req.body.skip).then(data=>{
        res.send({
            error: false,
            data,
        })
    });    
});

module.exports = router;