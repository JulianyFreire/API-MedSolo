import mongoose from 'mongoose';

const PlantaSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        dataDaPlantacao: {type: Date, required: true},
        descricao: {type: String}
    }
);

const Planta = mongoose.model("planta", PlantaSchema);

export default Planta; 