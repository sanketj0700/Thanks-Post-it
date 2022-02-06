const express = require('express');
const Message = require('../models/Message');
const User = require('../models/User');
const {authorizeAccessToken} = require('../middleware/auth');
const cote = require('cote');
const { response } = require('express');

const router = express.Router();

const messageServiceRequester = new cote.Requester({
    name: 'message service requester',
    key : 'message'
});


// 
// @desc        Creates Message
// @route       POST /message/create
router.post('/create',authorizeAccessToken,async(req,res)=>{
    try{
        const message =  {
            user : req.body.id,
            card : req.body.card
        }

        // const saveMessage = await message.save();
        // res.status(200).send({
        //     error: false,
        //     msg : message._id
        // });

        messageServiceRequester.send({type:'create',message},(response)=>{
            return res.status(200).send({
                error: false,
                msg : response
            });    
        });
        
    }catch(err){
        console.log(err);
        res.status(404).send({
            error : true,
            msg : err.message
        });
    }
});

// @desc  Returns all the message according to timeline in descending order
// @route  GET /message/read

router.get('/read',authorizeAccessToken,async(req,res)=>{
    try{
        // const message = await Message.find({}).sort({_id : -1}).limit(40).skip(req.body.skip);
        // res.status(200).send({
        //     error : false,
        //     msg : message
        // })
        const readRequest = {type : 'read'};
        messageServiceRequester.send(readRequest,(response)=>{
        return res.status(200).send({
            error : response.error,
            cards : response.msg
        }).end();
    });
    }catch(err){
        console.log(err);
        res.status(404).send({
            error : true,
            msg : err.message
        });
    }
});

// @desc        Updates the message data
// @route       PATCH /message/update

router.patch('/update',authorizeAccessToken,async(req,res)=>{
    try{
        // const update = {
        //     card : req.body.card
        // };
        // const message = await Message.findOneAndUpdate({
        //     _id : req.body._id
        //     },update,{
        //     new : false
        // }).then(
        //     res.status(200).send({
        //         error : false,
        //         msg : "Updated !!!!!!!!",
        //     })
        // );

        const update = {
            card : req.body.card,
            id : req.body.user
        }
        messageServiceRequester.send({type : 'update',update},(response)=>{

            return res.status(200).send({
                error : response.error,
                msg : response.msg,
            }).end();

        })

    }catch(err){
        console.status(404).log(err);
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
        //  await Message.findOneAndRemove({_id : req.body._id}).then(
        //     res.status(200).send({
        //         error : false,
        //         msg : "Deleted !!!!!!!!",
        //     })
        // );

        messageServiceRequester.send({type:'delete',id : req.body.user},(response)=>{

            return res.status(200).send({
                error : response.error,
                msg : response.msg,
            }).end();

        });

        

    }catch(err){
        console.log(err);
        res.status(404).send({
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
            res.status(200).send({
                error: false,
                msg : data
            })
        });
    }catch(err){
        console.log(err);
        res.status(404).send({
            error : true,
            msg : err.message
        });
    }
});

// @desc         Find all the starred messages of the user
// @route        GET /message/starredMessages

router.get('/starredMessages',authorizeAccessToken,async(req,res)=>{
    try{
        // await Message.find({_id : req.body.starred}).sort({_id : -1}).skip(req.body.skip).limit(10).then(data=>{
        //     res.status(200).send({
        //         error: false,
        //         msg : data
        //     })
        // });

        messageServiceRequester.send({type : 'starredMessages', starred : req.body.starred},(response)=>{
            return res.status(200).send({
                error : response.error,
                msg : response.msg,
            }).end();
        })

    }catch(err){
        console.log(err);
        res.status(404).send({
            error : true,
            msg : err.message
        });
    }
});

// @desc        searches for a particular query in search bar
// @route       GET /message/search

router.get('/search',authorizeAccessToken,async(req,res)=>{
    try{
        // await Message.find({ $text : {$search : req.body.query}}).sort({_id : -1}).limit(50).skip(req.body.skip).then(data=>{
        //     res.status(200).send({
        //         error: false,
        //         data,
        //     })
        // });

        messageServiceRequester.send({type : 'search', query : req.body.query},(response)=>{
            return res.status(200).send({
                error : response.error,
                msg : response.data,
            }).end();
        })

    }catch(err){
        console.log(err);
        res.status(404).send({
            error : true,
            msg : err.message
        });
    }  
});

// @desc        searches for a particular query in search bar
// @route       GET /message/dedicatedTo

router.get('/dedicatedTo',authorizeAccessToken,async(req,res)=>{
    try{
        // await Message.find({"card.dedicated.email" : req.body.email}).sort({_id : -1}).limit(40).skip(req.body.skip).then(data=>{
        //     res.status(200).send({
        //         error : false,
        //         data
        //     });
        // });

        messageServiceRequester.send({type : 'dedicatedTo', email : req.body.user},(response)=>{
            return res.status(200).send({
                error : response.error,
                msg : response.data,
            }).end();
        })

    }catch(err){
        console.log(err);
        res.status(404).send({
            error : true,
            msg : err.message
        });
    }
});
module.exports = router;