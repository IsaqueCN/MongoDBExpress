const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 10
    }
})

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;