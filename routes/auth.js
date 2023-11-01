const express = require('express')
const bcryptjs = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

const router = express.Router()

const User = require('../models/User')
const {registerValidation,loginValidation} = require('../validations/validation')

router.post('/register',async(req,res)=>{
    //validation to check user input using joi
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send({message: error.details[0].message})
    
    //validation 2: if user exists
    const existingUser = await User.findOne({email:req.body.email})
    if(existingUser) return res.status(400).send({message:'User already exists'})
    
    //encrypting the password before saving it
    const salt = await bcryptjs.genSalt(5)
    const hashedPassword = await bcryptjs.hash(req.body.password,salt)

    //code to register the user after the validations are done
    try{
        const user = new User({ ...req.body, password: hashedPassword})
        const savedUser = await user.save()
        res.send(savedUser)
    }
    catch(e){
        res.status(400).send({message:e})
    }
    
})

router.post('/login',async(req,res)=>{
    
    //validation to check user input using joi
    const {error} = loginValidation(req.body)
    if(error) return res.status(400).send({message: error.details[0].message})

    //validation 2: if user exists
    const user = await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send({message:'User does not exist.'})

    //validation 3: if the password is correct
    const isPasswordValid = await bcryptjs.compare(req.body.password,user.password)
    if(!isPasswordValid){
        return res.status(400).send({message: 'Password is incorrect.'})
    }

    //generate auth token after successful validation
    const token = jsonwebtoken.sign({_id:user.id} , process.env.TOKEN_SECRET)
    res.header('auth-token',token).send({'auth-token':token}) 
})

module.exports = router