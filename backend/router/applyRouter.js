const express = require('express');
const router = express.Router();
const companyModel = require('../model/applyModel');

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
    });
});

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
  companyModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/getbyid/:id', (req, res) => {
  companyModel.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/getbyinterview/:id', (req, res) => {
  companyModel.find({ interview: req.params.id }).populate('user')
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/checkapplication/:id/:userid', (req, res) => {
  companyModel.findOne({ interview: req.params.id, user: req.params.userid })
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json(err);
    });
});


module.exports = router;