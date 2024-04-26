//import express
const express = require('express');
const userRouter = require('./routers/userrouters');
const cors = require('cors');

//initilize express
const app= express();
const port= 5000;

//middleware
app.use(cors({
  origin:['http://localhost:3000']
}))  //always at first

app.use(express.json());   //parse incoming requests of content type - application

app.use('/user',userRouter)

//end point
app.get('/',(req,res)=>{
  res.send('Response from express');
})

app.get('/add',(req,res)=>{
  res.send('Response from add');
})

app.get('/update',(req,res)=>{
  res.send('Response from update');
})

app.get('/delete',(req,res)=>{
  res.send('Response from delete');
})

app.listen(port, ()=>{console.log('server added');});