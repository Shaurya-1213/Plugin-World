const express = require('express');
const ProductRouter = express.Router();
const Model = require('../models/ProductModel')

ProductRouter.post('/add',(req,res)=>{
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
ProductRouter.get('/getall',(req,res)=>{
  res.send('Response from user getall');
});

//getbyid
ProductRouter.get('/getbyid',(req,res)=>{
  res.send('Response from user getbyid');
});

//delete
ProductRouter.get('/delete',(req,res)=>{
  res.send('Response from user delete');
});

//update 
ProductRouter.get('/update',(req,res)=>{
  res.send('Response from user update');
});

module.exports = ProductRouter;