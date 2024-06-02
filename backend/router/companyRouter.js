const express = require('express');
const router = express.Router();
const companyModel = require('../model/companyModel');

router.post('/add', (req, res) => {
  console.log(req.body);
  new companyModel(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/authenticate', (req, res) => {
  console.log(req.body);

  companyModel.findOne(req.body)
    .then((result) => {
      if (result) res.status(200).json(result);
      else res.status(400).json({ message: 'Login Failed' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
})

//getall
router.get('/getall', (req, res) => {
  companyModel.find()
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/update/:id', (req, res) => {
  companyModel.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json(err);
    });
});


module.exports = router;