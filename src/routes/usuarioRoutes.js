import express from "express";
import UsuarioController from '../controllers/usuarioController.js';

const routes = express.Router();

routes.post('/usuarios', UsuarioController.criarUsuario);
routes.get('/usuarios', UsuarioController.listarUsuarios);
routes.get('/usuarios/:id', UsuarioController.obterUsuarioPorId);
routes.delete('/usuarios/:id', UsuarioController.deletarUsuario);

export default routes;