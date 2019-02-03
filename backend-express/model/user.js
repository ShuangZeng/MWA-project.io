const config = require("config");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
 
const userSchema = new mongoose.Schema({}, { strict: false });

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id, email: this.email, isAdmin:this.isAdmin},"jwtPrivateKey");
    return token;

}

const User = mongoose.model('users', userSchema);

module.exports.User = User;
