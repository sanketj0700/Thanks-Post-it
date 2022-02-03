const express = require('express');
const User = require('../models/User');
const {authorizeAccessToken} = require('../middleware/auth')
const router = express.Router();

router.post('/',authorizeAccessToken,async(req,res)=>{
    try{
        const payload = JSON.parse(Buffer.from(req.headers.authorization.split(" ")[1].split('.')[1],"base64").toString());
        const temp = await User.find({ _id : payload.email});
        if(temp.length === 0){
            const user = new User({
                fullName : payload.name,
                _id : payload.email,
                profilePicture : payload.picture,
            });
            await user.save();
            res.send({
                error: false,
                user,
                msg : "New user added!!!!"
            });
            
        }else{
            res.send({
                error : false
            });
        }
    }catch(err){
        console.log(err);
        res.send({
            error : true,
            msg : err.message
        });
    }
});

router.post('/addToStarred',authorizeAccessToken,async(req,res)=>{
    try{
        const update = {
            $addToSet : {
                starred : req.body.message_id
            },
        };
        await User.findByIdAndUpdate({ _id : req.body.email},update,{
            new : true,
        }).then(
            res.send({
                error: false,
                msg : "Added to Starred Message!!!!"
            })
        )   
    }catch(err){
        console.log(err);
        res.send({
            error : true,
            msg : err.message
        });
    }
});

router.post('/removeFromStarred',authorizeAccessToken,async(req,res)=>{
    try{
        const update = {
            $pull : {
                starred : req.body.message_id
            },
        };
        await User.findByIdAndUpdate({ _id : req.body.email},update,{
            new : true,
        }).then(
            res.send({
                error: false,
                msg : "Removed from Starred Message!!!!"
            })
        )   
    }catch(err){
        console.log(err);
        res.send({
            error : true,
            msg : err.message
        });
    }
});
module.exports = router;