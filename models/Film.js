const mongoose = require('mongoose')

const filmSchema  = mongoose.Schema({
    film_name: String,
    film_type:String,
    film_year:String,
    film_link:String
})

module.exports = mongoose.model('Film', filmSchema)