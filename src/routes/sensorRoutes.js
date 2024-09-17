import express from 'express';
import SensorController from '../controllers/sensorController.js';

const routes = express.Router();

routes.post('/sensores/:id/iniciar', SensorController.iniciarSensor); 
routes.get('/sensores', SensorController.listarSensores); 
routes.get('/sensores/:id/dados', SensorController.solicitarDadosSensor); 
routes.post('/sensores/:id/alerta', SensorController.enviarAlerta);

export default routes;