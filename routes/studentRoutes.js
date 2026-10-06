import express from 'express'

import students from '../data/students.js'

const router = express.Router()


router.get('/students', (req,res)=>{

    res.status(200).json({
        message:'data fetched successfully...',
        success:true,
        students
    })

})


router.get('/students/:id', (req,res)=>{

    const {id} = req.params

    let student = students.find((element)=>{
        return element.id == id
    })

    if(!student){

        return res.status(404).json({
            message:'student not found',
            success:false
        })

    }

    res.status(200).json({
        message:'student found successfully...',
        success:true,
        student
    })

})


export default router