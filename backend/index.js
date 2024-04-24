//import express
const express = require('express');
const userRouter = require('./routers/userrouters');


//initilize express
const app= express();
const port= 5000;

//middleware
app.use('/user',userRouter)

//end point
app.get('/',(req,res)=>{
  res.send('Response from express');
})

app.get('/add',(req,res)=>{
  res.send('Response from add');
})

app.listen(port, ()=>{console.log('server added');});