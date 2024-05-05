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

  //getall
router.get('/getall', (req, res) => {
    companyModel.find()
      .then((result) => {
        res.status(200).json(result)
      }).catch((err) => {
        res.status(500).json(err);
      });
  });


  module.exports=router;