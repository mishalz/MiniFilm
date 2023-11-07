const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express()


const filmRoute = require('./routes/films')
const authRoute = require('./routes/auth')

app.use(bodyParser.json())
app.use('/api/film',filmRoute)
app.use('/api/user',authRoute)

mongoose.connect("mongodb+srv://mishalzulfiqar2911:Mishal.2911@minifilmcluster.zykjzjp.mongodb.net/MiniFilm?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to database")
})

app.listen(3000,()=>{
    console.log('Server is running')
})
