const mongoose = require('mongoose')

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
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'category',
        type: String,
        required: true,
    },
    status_active: {
        type: Boolean,
        default: true,
    }, 
    
    },    {
    timestamps: true,   
})


module.exports = mongoose.model('Note', NoteSchema)
