const express=require('express')
const router =express.Router()
const userData=require('../models/user')

router.get('/getUsersData',async(req,res)=>{
    try {
        const users = await userData.find()
        res.json(users)
    } catch (error) {
        res.send('Error'+error)
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const user = await userData.findById(req.params.id)
        res.json(user)
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

router.patch('/:id',async(req,res)=>{
    try {
        const user =await userData.findById(req.params.id)
        user.name=req.body.name
        const u1=await user.save()
        res.json(u1)
    } catch (error) {
        res.send('Error'+error)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const user =await userData.findByIdAndRemove(req.params.id)
        res.json(user)
    } catch (error) {
        res.send('Error'+error)
    }
})
module.exports=router