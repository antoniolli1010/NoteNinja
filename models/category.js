const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    },    {
    timestamps: true,
}) 

module.exports = category = mongoose.model('Category', categorySchema)