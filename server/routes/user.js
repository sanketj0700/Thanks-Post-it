const express = require('express');
const cote = require('cote');
const User = require('../models/User');
const {authorizeAccessToken} = require('../middleware/auth');
const { response } = require('express');
const router = express.Router();


const userServiceRequester = new cote.Requester({
    name: 'user service requester',
    key : 'user'
});


router.post('/',authorizeAccessToken,async(req,res)=>{
    try{
        const payload = JSON.parse(Buffer.from(req.headers.authorization.split(" ")[1].split('.')[1],"base64").toString());
        const temp = await User.find({ _id : payload.email});
        if(temp.length === 0){
            const user = new User({
                name : payload.name,
                _id : payload.email,
                picture : payload.picture,
                given_name : payload.given_name,
                family_name : payload.family_name,
                nickname : payload.nickname,
            });
            await user.save();
            res.status(200).send({
                error: false,
                user,
                msg : "New user added!!!!"
            });
            
        }else{
            res.status(200).send({
                error : false
            });
        }
    }catch(err){
        console.log(err);
        res.status(404).send({
            error : true,
            msg : err.message
        });
    }
});

router.get('/all',async(req,res)=>{
    try{
        userServiceRequester.send({type : 'all'},(response)=>{
            return res.status(200).send({
                error: response.error,
                msg : response.users,
            });
        });
    }catch(err){
        console.log(err);
        res.status(404).send({
            error : true,
            msg : err.message
        });
    }
})

router.post('/addToStarred',authorizeAccessToken,async(req,res)=>{
    try{
        // const update = {
        //     $addToSet : {
        //         starred : req.body.message_id
        //     },
        // };
        // await User.findByIdAndUpdate({ _id : req.body.email},update,{
        //     new : true,
        // }).then(
        //     res.status(200).send({
        //         error: false,
        //         msg : "Added to Starred Message!!!!"
        //     })
        // )   

        userServiceRequester.send({type : 'addToStarred',message_id : req.body.message_id,email : req.body.email},(response)=>{
            return res.status(200).send({
                error: response.error,
                msg : response.msg,
            });
        })

    }catch(err){
        console.log(err);
        res.status(404).send({
            error : true,
            msg : err.message
        });
    }
});

router.post('/removeFromStarred',authorizeAccessToken,async(req,res)=>{
    try{
        // const update = {
        //     $pull : {
        //         starred : req.body.message_id
        //     },
        // };
        // await User.findByIdAndUpdate({ _id : req.body.email},update,{
        //     new : true,
        // }).then(
        //     res.status(200).send({
        //         error: false,
        //         msg : "Removed from Starred Message!!!!"
        //     })
        // )
        
        userServiceRequester.send({type : 'removeFromStarred',message_id : req.body.message_id,email : req.body.email},(response)=>{
            return res.status(200).send({
                error: response.error,
                msg : response.msg,
            });
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