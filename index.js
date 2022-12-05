const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const mongoDB = "mongodb+srv://mernapp:99199097@cluster0.dyrlanl.mongodb.net/e_com_db?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json())
app.use(cors({origin: '*'}))
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '20mb'}))

const route = require('./route')
app.use(route)

const port = 5000

if(mongoDB){
  console.log('DB Connected')
  app.listen(port, ()=>console.log("Server is running on port " + port))
}else{
  console.log("Connect db failed")
}

