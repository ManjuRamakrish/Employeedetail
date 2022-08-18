const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/EmployeeDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const employeeRouter = require('./routes/employees')
app.use('/employees',employeeRouter)

app.listen(2000, () => {
    console.log('Server started')
})