const express =require('express');
const router =express.Router();
const Model =require('../models/contactModel');

router.post('/add',(req,res)=>{
    console.log("Contact added ");
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}
)
router.get('/getall', (req, res) => {
    Model.find().populate('user')
      .then((result) => {
        res.status(200).json(result);
      }).catch((err) => {
        console.log(err);
        res.status(500).json(err) 
      });
  });
module.exports=router;