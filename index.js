require('dotenv').config()

const express=require('express')

const cors=require('cors')

const puserver=express()

puserver.use(cors())

// import router
const router=require('./Routes/router')

require('./DB/connections')



puserver.use(express.json())

// use of router by server
puserver.use(router)

puserver.use('/uploads',express.static('./uploads'))



const PORT=8000 || process.env

puserver.listen(PORT, ()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

puserver.get('/',(req,res)=>{
    res.send(`<h1>pawsup server running successfully and ready to accept requests from clients</h1>`)
})



