const Category = require('../models/category')
//const Note = require('../models/note')

module.exports = {
    async index(req, res) {
        const category = await Category.find(req.params)
        return res.json(category)
    },
    async show(req,res) {
        const category = await Category.findById(re.body)
        return res.json(category)
    },
    async store(req, res) {
        //console.log(req.params.id)
        //return res.json({ ok: true })
        
        const category = await Category.create(req.params.id)
        return res.json(category)
    },
    async update(req, res) {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(category)
    },
    async destroy(req, res) {
        await Category.findByIdAndRemove(req.params.id);
        return res.send("Categoria deletada");
    }
}
