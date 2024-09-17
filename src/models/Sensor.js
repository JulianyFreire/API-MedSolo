import mongoose from "mongoose";

const SensorSchema = new mongoose.Schema(
    {
        status: {
            type: String, 
            required: true,
            enum: ['Ativo', 'Inativo', 'Alerta'], 
            default: 'Inativo' 
        },
        descricao: { type: String, required: false } 
    },
    { timestamps: true } 
);

const Sensor = mongoose.model("sensor", SensorSchema);

export default Sensor;