import express from "express";
import PlantaController from '../controllers/plantaController.js';

const routes = express.Router();

routes.post('/plantas', PlantaController.criarPlanta);
routes.get('/plantas', PlantaController.listarPlantas);
routes.delete('/plantas/:id', PlantaController.deletarPlanta);

export default routes; 