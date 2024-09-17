import Planta from "../models/CadastroPlanta.js";

class PlantaController {
    static async criarPlanta(req, res) {
        const { nome, dataDaPlantacao, descricao } = req.body;

        try {
            const novaPlanta = new Planta({ nome, dataDaPlantacao, descricao });
            await novaPlanta.save();
            res.status(201).json(novaPlanta);
        } catch (error) {
            res.status(400).json({ message: "Erro ao criar a planta", error });
        }
    }

    static async listarPlantas(req, res) {
        try {
            const plantas = await Planta.find();
            res.status(200).json(plantas);
        } catch (error) {
            res.status(500).json({ message: "Erro ao obter as plantas", error });
        }
    }

    static async deletarPlanta(req, res) {
        const { id } = req.params;

        try {
            const plantaDeletada = await Planta.findByIdAndDelete(id);
            if (!plantaDeletada) {
                return res.status(404).json({ message: "Planta não encontrada" });
            }
            res.status(200).json({ message: "Planta deletada com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar a planta", error });
        }
    }
}

export default PlantaController;