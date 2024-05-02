const express = require('express');
const addProductRouter = express.Router();
const Model = require('../models/addProductModel')

addProductRouter.post('/add',(req,res)=>{
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
addProductRouter.get('/getall',(req,res)=>{
  res.send('Response from user getall');
});

//getbyid
addProductRouter.get('/getbyid',(req,res)=>{
  res.send('Response from user getbyid');
});

//delete
addProductRouter.get('/delete',(req,res)=>{
  res.send('Response from user delete');
});

//update 
addProductRouter.get('/update',(req,res)=>{
  res.send('Response from user update');
});

module.exports = addProductRouter;