var express = require('express');
var router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({}, {
  strict: false
});
const questions = mongoose.model('questions', questionSchema);


router.get('/', auth, admin, async (req, res, next) => {
  const results = await questions.find();
  res.json(results);
});

router.get('/:id', auth, admin, async (req, res, next) => {
  const results = await questions.findById({
    _id: req.params.id
  });

  res.json(results);
});

router.get('/tags/:tags', auth, admin, async (req, res, next) => {
  const results = await questions.find({}).where('tags').in([req.params.tags]);

  res.json(results);
});


router.post('/', auth, admin, async (req, res, next) => {
  const tmp = req.body
  tmp.dateCreated = new Date();
  var record = new questions(tmp)
  record.save();

  res.json('success');
});

router.delete('/', auth, admin, async (req, res, next) => {
  const results = await questions.findByIdAndRemove(req.body);

  res.json(results);
});

router.patch('/:id', auth, admin, async (req, res, next) => {
  const results = await questions.update({
    '_id': req.params.id
  }, {
    $set: req.body
  });

  res.json(results);
});

router.get('/test/random', async (req, res) => {

  const results = await questions.find({}).limit(3);

  res.json(results)

})

module.exports = router;