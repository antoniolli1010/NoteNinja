const Note = require('../models/note')

module.exports = {
    async index(req, res) {
        const note = await Note.find(req.params)
        return res.json(note)
    },
    async show(req,res) {
        const note = await Note.findById(req.params.id)
        return res.json(note)
    },
    async store(req, res) {
        // Criação
        const note = await Note.create(req.body)
        return res.json(note)
    },
    async update(req, res) {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(note)
    },
    async destroy(req, res) {
        await Note.findByIdAndRemove(req.params.id);
        return res.send("Anotação deletada");
    }
}
 