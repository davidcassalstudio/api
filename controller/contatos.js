const Contatos = require('../models/Contatos');

exports.getContato = async (req,res,next) => {
    const usuarios = await Contatos.find({});
    res.json(usuarios);
}

exports.postContato = (req,res,next) => {
    const contatos = Contatos.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    })

    res.json(contatos);
}