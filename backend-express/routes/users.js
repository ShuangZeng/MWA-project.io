var express = require('express');
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
var router = express.Router();
const {User} = require('../model/user');
const sendMail = require('../config/sendMail')

/* GET users listing. */
router.get('/',async (req, res, next)=> {
  const results = await User.find();
 
  res.json(results);
});

router.get('/:id',auth,  async (req, res, next)=> {
  const results = await User.findById({ _id: req.params.id});
 
  res.json(results);
});

router.get('/role/:role',auth, async (req, res, next)=> {
  const results = await User.find({}).where('role').in([req.params.role]);
 
  res.json(results);
});


router.post('/', async (req, res, next)=> {
  console.log('post');

  let user = await User.findOne({
    email:req.body.email
  })

  if(user){
    return res.status(400).json("User alredy Registerd");
  };

  const tmp = req.body
  tmp.dateCreated = new Date();
  var record = new User(tmp)
   
  if (req.body.isStudent === true){
    record = await record.save(); 
    res.json(record);
  }


  const salt = await bcrypt.genSalt(10);
  record.password = await bcrypt.hash(record.password, salt);
  record = await record.save(); 

  const token =  record.generateAuthToken();
  res.header("x-auth-token", token).json(record);

  
});

router.delete('/',auth, async (req, res, next)=> {
  const results = await User.findByIdAndRemove(req.body);
 
  res.json(results);
});

router.patch('/student/:id', async (req, res, next)=> {
   ///for testing (works-- now need to pass value from Angula app)
 
 
 User.update({'_id': req.params.id},{$set : req.body}, function(error, results){
  var email = req.body.email;
  var userID = req.params.id;
  User.findOne({email:email}, (err,user)=>{
           
           const token = user.generateAuthToken();
           let to = email;
           let subject  = "Programming TEST!";
           let mail = `<h1>Congratulations!!</h1>
             <p>You  are required to take a 2 hours 3 questions programming test,</p>
             <p>by passing this test you will  be accepted at this university based on the results fo the test.
             click on the link below to take your test  </p>
             <table width="100%" cellspacing="0" cellpadding="0">
         <tr>
             <td>
                 <table cellspacing="0" cellpadding="0">
                     <tr>
                         <td style="border-radius: 2px;" bgcolor="#ED2939">
                             <a href="http://localhost:4200/passwordlessAuth/${token}/${userID}" target="_blank" style="padding: 8px 12px; border: 1px solid #ED2939;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;">
                                 Click here to take the test!            
                             </a>
                         </td>
                     </tr>
                 </table>
             </td>
         </tr>
       </table>
       <br>
            <p> <b>NOTE: <i>you can only take this test once</i></b></p>`;
             
         sendMail(to,subject,mail);
           
           return res.json({status: 200, message: token, results:results});

      });
     
      
  });
  
});

module.exports = router;
