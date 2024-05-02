const express = require('express');
const userRouter = express.Router();
const Model = require('../model/userModel');

userRouter.post('/add', (req,res) => {
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


userRouter.post('/authenticate',(req, res) => {
  console.log(req.body);

  Model.findOne(req.body)
  .then((result) => {
    if(result) res.status(200).json(result);
    else res.status(400).json({message:'Login Failed'});
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
})
// //getall
// router.get('/getall',(req,res)=>{
//     res.send('Response from user getall');
//   });
  
//   //getbyid
//   router.get('/getbyid',(req,res)=>{
//     res.send('Response from user getbyid');
//   });
  
//   //delete
//   router.get('/delete',(req,res)=>{
//     res.send('Response from user delete');
//   });
  
//   //update 
//   router.get('/update',(req,res)=>{
//     res.send('Response from user update');
//   });
  
  module.exports = userRouter;