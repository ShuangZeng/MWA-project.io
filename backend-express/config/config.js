const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://sysadmin:Admin2020@tutaappcluster-ho95w.mongodb.net/team4?retryWrites=true" ,{useNewUrlParser:true})
.then(()=> console.log("Connected to DB!"))
.catch(error => console.log("Couldnt connect to DB!", error.message));

module.exports = connect;