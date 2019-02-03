
const bcrypt = require("bcryptjs");
const {User} = require("../model/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) =>  {
   var email = req.body.email;
    let user =  await User.findOne({email:email});
    if(!user){
        return res.json({status: 400, message:"Invalid email"});
    };

    const validPassword = bcrypt.compare(req.body.password, user.password);4
     if(!validPassword){
        return res.json({status: 400, message:"Invalid password"});
     }
     if(!user.isActive){
        return res.json({status: 400, message:"Inactive user"});

     }

     delete(user.password);
     delete(user.dateCreated)

     const token = user.generateAuthToken();
     
     return res.json({status: 200, message: token, user:user});

}); 

module.exports = router;