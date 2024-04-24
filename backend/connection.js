const mongoose = require('mongoose');

const url = "mongodb+srv://shauryasingh1213:Shaurya1213@cluster0.57jfbgj.mongodb.net/pluginworld?retryWrites=true&w=majority&appName=Cluster0"

//Asynchronus function
mongoose.connect(url)
.then((result)=> {
  console.log('connected to db');
})
.catch((err)=> {
  console.log(err);
});

module.exports = mongoose;