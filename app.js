import express from 'express'

import logger from './middleware/logger.js'
import studentRoutes from './routes/studentRoutes.js'


const app = express()

const port = 3000


app.use(express.json())

app.use(logger)

app.use(studentRoutes)


app.use((req,res)=>{

    res.status(404).json({
        message:'route not found',
        success:false
    })

})


app.use((error,req,res,next)=>{

    res.status(500).json({
        message:'internal server error',
        error:error.message,
        success:false
    })

})


app.listen(port, ()=>{

    console.log('server has started at port : ', port)

})