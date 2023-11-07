const jsonwebtoken = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send({message:"User is not logged in!"})
    }
    try{
        const verified = jsonwebtoken.verify(token,process.env.TOKEN_SECRET)
        req.user = verified
        next()

    }catch(err){
        return res.status(401).send({message:"Invalid Token"})
    }
}

module.exports = verifyToken
