const Note = require('../models/note')
const Category = require('../models/category')

module.exports = {
    async index(req, res) {
        const note = await Note.find(req.params)
        return res.json(note)
    },
    async show(req,res) {
        const note = await Note.findById(req.params.id)
        return res.json(note)
    },
    async store(req, res, next) {
        let category = req.body.category
        category = await Category.findById(category)
        .catch(err => { return res.status(400).json({ message: "Category does not exist"})}) 
        let note = await Note.create(req.body)
        note.category = category.name
        return res.json(note)
    },
    async update(req, res) {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(note)
    },
    async destroy(req, res) {
        await Note.findByIdAndRemove(req.params.id)
        return res.send("Note deleted successfully")
    }
}
 