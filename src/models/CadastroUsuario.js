import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        senha: {type: Number, required: true},
        login: {type: String, required: true}
    }
);

const Usuario = mongoose.model("usuarios", UsuarioSchema);

export default Usuario;