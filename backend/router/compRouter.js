const express = require('express');
const compRouter = express.Router();
const Model = require('../model/compModel');

compRouter.post('/add', (req, res) => {
  console.log(req.body);
  new Model(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


compRouter.post('/authenticate', (req, res) => {
  console.log(req.body);

  Model.findOne(req.body)
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
compRouter.get('/getall', (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = compRouter;