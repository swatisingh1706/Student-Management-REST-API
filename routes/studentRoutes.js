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

    if(isNaN(id)){

        return res.status(400).json({
            message:'invalid student id',
            success:false
        })

    }

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


router.post('/students', (req,res)=>{

    let {name, age, id} = req.body

    if(!name || !age || !id){

        return res.status(400).json({
            message:'data not found',
            success:false
        })

    }

    students.push({name, age, id})

    res.status(201).json({
        message:'student created successfully...',
        success:true,
        students
    })

})


router.put('/students/:id', (req,res)=>{

    let {name, age} = req.body

    let id = req.params.id

    if(isNaN(id)){

        return res.status(400).json({
            message:'invalid student id',
            success:false
        })

    }

    let student = students.find((element)=>{
        return element.id == id
    })

    if(!student){

        return res.status(404).json({
            message:'student not found',
            success:false
        })

    }

    if(name){
        student.name = name
    }

    if(age){
        student.age = age
    }

    res.status(200).json({
        message:'student updated successfully...',
        success:true,
        students
    })

})


router.delete('/students/:id', (req,res)=>{

    let id = req.params.id

    if(isNaN(id)){

        return res.status(400).json({
            message:'invalid student id',
            success:false
        })

    }

    let student = students.find((element)=>{
        return element.id == id
    })

    if(!student){

        return res.status(404).json({
            message:'student not found',
            success:false
        })

    }

    let index = students.indexOf(student)

    students.splice(index,1)

    res.status(200).json({
        message:'student deleted successfully...',
        success:true,
        students
    })

})


export default router