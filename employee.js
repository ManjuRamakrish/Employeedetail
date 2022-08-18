const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mob: {
        type: Number,
        required: true
    },
    Sal: {
        type: Number,
        required: true
        
    }

})

module.exports = mongoose.model('Employee',employeeSchema)