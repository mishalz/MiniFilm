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

mongoose.connect(process.env.DB_URL)

app.listen(3000)
