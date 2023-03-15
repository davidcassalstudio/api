const express  = require('express');
const app      = express();
const PORT     = process.env.PORT || 5000;
const mongoose = require('mongoose');
const contatos = require('./controller/contatos');
const cors     = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://aguiasmartech:aM6UQ6Y4UsW3pPLL@aguiasmartech.bo7qyqz.mongodb.net/?retryWrites=true&w=majority`)
.then(response => {
    console.log('Conectado!');
})
.catch(err => {
    console.error(err);
})

app.get('/users', contatos.getContato);
app.post('/users', contatos.postContato);

app.listen(PORT, () => console.log('O servidor está rodando em localhost:5000'));