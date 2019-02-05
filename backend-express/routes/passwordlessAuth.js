const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {User} = require("../model/user");
const express = require("express");
const router = express.Router();

router.post("/auth", async (req, res) =>  {
   var token = req.body.usertoken
   const decoded = jwt.verify(token, 'jwtPrivateKey');
   req.user = decoded;
   
    User.findOne({_id:req.user._id, isActive:true}, (err,user)=>{
        if(!user){
            return res.json({status: 400, message:"Invalid"});
        };
       
       
        try {
           
            console.log("start")
            console.log(req.user)
            User.update( {'_id':req.user._id}, {$set:{isActive:false}}, function(err, results){
                console.log(results)
            });
            res.status(200).json({message:user});
        } catch (error) {
            res.status(400).json("Invalid token.");
        }
       
        
    });
}); 

module.exports = router;