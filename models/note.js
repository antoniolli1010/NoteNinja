const mongoose = require('mongoose')
const Category = require('./category')
const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: { 
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, String, 
        ref: 'Category'
    },
    status_active: {
        type: Boolean,
        default: true,
    }, 
    
    },    {
    timestamps: true,   
})


module.exports = note = mongoose.model('Note', NoteSchema)
