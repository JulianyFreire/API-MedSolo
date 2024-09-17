import Sensor from '../models/Sensor.js';

class SensorController {
    static async iniciarSensor(req, res) {
        const { id } = req.params;

        try {
            const sensor = await Sensor.findById(id);
            if (!sensor) {
                return res.status(404).json({ message: "Sensor não encontrado" });
            }

            sensor.status = "Ativo";
            await sensor.save();
            res.status(200).json({ message: "Sensor iniciado com sucesso", sensor });
        } catch (error) {
            res.status(400).json({ message: "Erro ao iniciar o sensor", error });
        }
    }

    static async listarSensores(req, res) {
        try {
            const sensores = await Sensor.find();
            res.status(200).json(sensores);
        } catch (error) {
            res.status(500).json({ message: "Erro ao obter os sensores", error });
        }
    }

    static async solicitarDadosSensor(req, res) {
        const { id } = req.params;

        try {
            const sensor = await Sensor.findById(id);
            if (!sensor) {
                return res.status(404).json({ message: "Sensor não encontrado" });
            }

            const dados = "Dados simulados do sensor"; 
            res.status(200).json({ message: "Dados obtidos com sucesso", dados });
        } catch (error) {
            res.status(400).json({ message: "Erro ao solicitar dados do sensor", error });
        }
    }

    static async enviarAlerta(req, res) {
        const { id } = req.params;

        try {
            const sensor = await Sensor.findById(id);
            if (!sensor) {
                return res.status(404).json({ message: "Sensor não encontrado" });
            }

            if (sensor.status === "Alerta") {
                res.status(200).json({ message: "Alerta enviado com sucesso" });
            } else {
                res.status(200).json({ message: "Nenhum alerta necessário" });
            }
        } catch (error) {
            res.status(400).json({ message: "Erro ao enviar alerta", error });
        }
    }
}

export default SensorController;