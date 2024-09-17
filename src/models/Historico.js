import mongoose from "mongoose";

const HistoricoSchema = new mongoose.Schema(
    {
        data: { type: Date, required: true },
        dados: { type: String, required: true },
        usuario: { type: mongoose.Schema.Types.ObjectId, ref: "usuario", required: true }, 
        planta: { type: mongoose.Schema.Types.ObjectId, ref: "planta", required: true },  
        sensor: { type: mongoose.Schema.Types.ObjectId, ref: "sensor", required: false } 
    }
);

const Historico = mongoose.model("historico", HistoricoSchema);

export default Historico;