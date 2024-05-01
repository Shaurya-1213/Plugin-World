const express = require('express');
const feedbackRouter = express.Router();
const Model = require('../models/feedbackModel')

feedbackRouter.post('/add',(req,res)=>{
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
feedbackRouter.get('/getall',(req,res)=>{
  res.send('Response from user getall');
});

//getbyid
feedbackRouter.get('/getbyid',(req,res)=>{
  res.send('Response from user getbyid');
});

//delete
feedbackRouter.get('/delete',(req,res)=>{
  res.send('Response from user delete');
});

//update 
feedbackRouter.get('/update',(req,res)=>{
  res.send('Response from user update');
});

module.exports = Router;