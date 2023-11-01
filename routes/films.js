const express = require('express')
const router = express.Router()

const verifyToken = require("../middleware/verifyToken")
const Film = require('../models/film')

router.get('/',verifyToken,async(req,res)=>{
    try{
        const films = await Film.find()
        res.send(films)}
    catch(e){
        res.status(400).send({message:e})
    }
})

module.exports = router