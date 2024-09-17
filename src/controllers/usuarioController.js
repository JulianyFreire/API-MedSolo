import Usuario from "../models/CadastroUsuario.js";

class UsuarioController {
    static async criarUsuario(req, res) {
        const { nome, senha, login } = req.body;

        try {
            const novoUsuario = new Usuario({ nome, senha, login });
            await novoUsuario.save();
            res.status(201).json(novoUsuario);
        } catch (error) {
            res.status(400).json({ message: "Erro ao criar o usuário", error });
        }
    }

    static async listarUsuarios(req, res) {
        try {
            const usuarios = await Usuario.find();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ message: "Erro ao obter os usuários", error });
        }
    }

    static async obterUsuarioPorId(req, res) {
        const { id } = req.params;

        try {
            const usuario = await Usuario.findById(id);
            if (!usuario) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ message: "Erro ao obter o usuário", error });
        }
    }

    static async deletarUsuario(req, res) {
        const { id } = req.params;

        try {
            const usuarioDeletado = await Usuario.findByIdAndDelete(id);
            if (!usuarioDeletado) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            res.status(200).json({ message: "Usuário deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar o usuário", error });
        }
    }
}

export default UsuarioController;
