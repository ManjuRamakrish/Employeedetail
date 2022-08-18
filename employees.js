const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')


router.get('/', async(req,res) => {
    try{
           const employees = await Employee.find()
           res.json(employees)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const Employee = await Employee.findById(req.params.id)
           res.json(employee)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const employee = await Employee.findByIdAndRemove(req.params.id)
        res.json(employee)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id', async(req,res) => {
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.id,{
            id: req.body.id,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Email: req.body.Email,
            Mob: req.body.Mob ,
            mSal: req.body.Sal
        })
        res.json(employee)
    }catch(err){
        res.send('Error ' + err)
    }
})



router.post('/', async(req,res) => {
    const employee = new Employee({
        id: req.body.id,
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        Mob: req.body.Mob ,
        Sal: req.body.Sal
    })

    try{
        const a1 =  await employee.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})



module.exports = router