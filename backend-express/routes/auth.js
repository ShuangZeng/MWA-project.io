
const bcrypt = require("bcryptjs");
const {User} = require("../model/user");
const express = require("express");
const router = express.Router();



router.post("/", async (req, res) =>  {
   var email = req.body.email;
    let user =  await User.findOne({email:email});


    console.log(user.password);
    if(!user){
        return res.status(400).send("Invalid Email or Password");
    };

    const validPassword = bcrypt.compare(req.body.password, user.password);4
     if(!validPassword){
        return res.status(400).send("Invalid Email or Password");
     }
     const token = user.generateAuthToken();
     
     res.status(200).json(token);

}); 

module.exports = router;