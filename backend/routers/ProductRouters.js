const express = require('express');
const ProductRouter = express.Router();
const Model = require('../models/ProductModel')

ProductRouter.post('/add', (req, res) => {
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
ProductRouter.get('/getall', (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });
});

//getbyid
ProductRouter.get('/getbyid/:id', (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete
ProductRouter.get('/delete', (req, res) => {
  res.send('Response from user delete');
});

//update 
ProductRouter.get('/update', (req, res) => {
  res.send('Response from user update');
});

module.exports = ProductRouter;