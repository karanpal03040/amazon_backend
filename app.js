require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('./database/connection')
const Products = require('./models/productSchema')
const cors = require('cors')
const router = require('./routes/router')
const cookieParser = require('cookie-parser')


const DefaultData = require('./defaultData')

const port = 8005;
app.use(cors({credentials: true, origin: 'https://amazonbackend-zeta.vercel.app'}))


app.use(express.json())
app.use(cookieParser(''))

app.use(router);

app.get('/', (req, res)=>{
   res.send("<h1>Hello world</h1>")
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

DefaultData();
