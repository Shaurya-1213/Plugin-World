//import express
const express = require('express');
const userRouter = require('./routers/userRouters');
const cors = require('cors');
const feedbackRouter = require('./routers/feedbackRouters');
const newsletterRouter = require('./routers/newsletterRouters');
const ProductRouter = require('./routers/ProductRouters');
const UtilRouter = require('./routers/util');

//initilize express
const app = express();
const port = 5000;

//middleware
app.use(cors({ origin: '*'}))  //always at first

app.use(express.json());   //parse incoming requests of content type - application

app.use('/user', userRouter)

app.use('/feedback', feedbackRouter)

app.use('/newsletter', newsletterRouter)

app.use('/product', ProductRouter)

app.use('/util', UtilRouter)

app.use(express.static('./static/uploads'));
app.use(express.static('./static/resources'));

//end point
app.get('/', (req, res) => {
  res.send('Response from express');
})


app.listen(port, () => { console.log('server added'); });