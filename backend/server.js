const express = require('express')
const app = express()
const PORT = 3000 | 4000

app.get('/',(req,res)=>{
    return res.sendStatus(200).json({message:"success"})
})

app.listen(PORT,()=>{
    console.log(`your app is listen on ${PORT}`)
})