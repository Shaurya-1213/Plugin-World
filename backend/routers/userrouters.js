const express = require('express');
const userRouter = express.Router();
const Model = require('../models/userModel')

userRouter.post('/add',(req,res)=>{
  console.log(req.body);
  new Model(req.body).save()
  .then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});
  
//getall
userRouter.get('/getall',(req,res)=>{
  res.send('Response from user getall');
});

//getbyid
userRouter.get('/getbyid',(req,res)=>{
  res.send('Response from user getbyid');
});

//delete
userRouter.get('/delete',(req,res)=>{
  res.send('Response from user delete');
});

//update 
userRouter.get('/update',(req,res)=>{
  res.send('Response from user update');
});

module.exports = userRouter;