require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3001;

let data = ['json', 'javascript object notation'];

app.get('/api', (req, res) => {
  setTimeout(() => {
    res.json(data);
  }, 3000);
});

const start = async () => {
  try{
    app.listen(PORT,() => console.log('server started on PORT =',PORT))
  } catch(e){
    console.log(e)
  }
}

start()