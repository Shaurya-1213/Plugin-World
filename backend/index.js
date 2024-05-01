//import express
const express = require('express');
const userRouter = require('./routers/userRouters');
const cors = require('cors');
const feedbackRouter = require('./routers/feedbackRouters');
const newsletterRouter = require('./routers/newsletterRouters');

//initilize express
const app= express();
const port= 5000;

//middleware
app.use(cors({
  origin:['http://localhost:3000']
}))  //always at first

app.use(express.json());   //parse incoming requests of content type - application

app.use('/user',userRouter)

app.use('/feedback',feedbackRouter)

app.use('/newsletter',newsletterRouter)

//end point
app.get('/',(req,res)=>{
  res.send('Response from express');
})

app.get('/add',(req,res)=>{
  res.send('Response from express add');
})

app.get('/update',(req,res)=>{
  res.send('Response from update');
})

app.get('/delete',(req,res)=>{
  res.send('Response from delete');
})

app.listen(port, ()=>{console.log('server added');});