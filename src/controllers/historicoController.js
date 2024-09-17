import Historico from "../models/Historico.js";

class HistoricoController {
    static async criarHistorico(req, res) {
        const { data, dados, usuarioId, plantaId } = req.body;

        try {
            const novoHistorico = new Historico({ data, dados, usuario: usuarioId, planta: plantaId });
            await novoHistorico.save();
            res.status(201).json(novoHistorico);
        } catch (error) {
            res.status(400).json({ message: "Erro ao criar o histórico", error });
        }
    }

    static async listarHistoricos(req, res) {
        try {
            const historicos = await Historico.find().populate('usuario').populate('planta');
            res.status(200).json(historicos);
        } catch (error) {
            res.status(500).json({ message: "Erro ao obter os históricos", error });
        }
    }

    static async deletarHistorico(req, res) {
        const { id } = req.params;

        try {
            const historicoDeletado = await Historico.findByIdAndDelete(id);
            if (!historicoDeletado) {
                return res.status(404).json({ message: "Histórico não encontrado" });
            }
            res.status(200).json({ message: "Histórico deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar o histórico", error });
        }
    }
}

export default HistoricoController;