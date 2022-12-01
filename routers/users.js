const express=require('express')
const router =express.Router()
const userData=require('../models/user')

router.get('/',async(req,res)=>{
    try {
        const users = await userData.find()
        res.json(users)
    } catch (error) {
        res.send('Error'+error)
    }
})

router.post('/',async(req,res)=>{
    const user= new userData({
        name:req.body.name,
        role:req.body.role,
        email:req.body.email,
        password:req.body.password
    })

    try {
        const u1= await user.save()
        res.json(u1)
    } catch (error) {
        res.send('Error'+error)
    }
})

module.exports=router