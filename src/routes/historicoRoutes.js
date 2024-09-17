import express from "express";
import HistoricoController from "../controllers/historicoController.js";

const routes = express.Router();

routes.post('/historicos', HistoricoController.criarHistorico);  
routes.get('/historicos', HistoricoController.listarHistoricos); 
routes.delete('/historicos/:id', HistoricoController.deletarHistorico); 

export default routes;