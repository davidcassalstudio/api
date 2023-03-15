const mongoose = require('mongoose');

const Contatos = mongoose.Schema({
    nome:  {
        type: String,
        require: true 
    },
    email: {
        type: String,
        require: true 
    },
    telefone:  {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Contatos', Contatos);