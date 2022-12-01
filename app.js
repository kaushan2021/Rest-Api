const express=require('express')
const mongosse=require('mongoose')
const url='mongodb://localhost:27017/pos'
const app=express()
const port=9000

mongosse.connect(url,{useNewUrlParser:true})
const con=mongosse.connection

con.on('open',() => { 
    console.log('connected...')
})

app.use(express.json())
const userRouter=require('./routers/users')
app.use('/users',userRouter)
app.listen(port,() => {
console.log('server started...') 
})