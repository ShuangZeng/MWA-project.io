var express = require('express');
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
var router = express.Router();
const {User} = require('../model/user');

//get all (staff,student) users
router.get('/all',auth, async (req, res, next)=> {
  console.log('all')
  const results = await User.find({}).where('role').ne(['admin']);
 
  res.json(results);
});

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


router.post('/',[auth, admin], async (req, res, next)=> {

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

router.delete('/:id',auth, admin, async (req, res, next)=> {
  const results = await User.findByIdAndRemove(req.param.id);
  res.json({status:200, message: results});
});

router.patch('/:id', async (req, res, next)=> {

  const results = await User.update({'_id': req.params.id},{$set : req.body});
 
  res.json({status:200, message: results});
});

module.exports = router;
