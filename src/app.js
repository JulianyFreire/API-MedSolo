import express from "express";
import connectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await connectNaDatabase();

conexao.on("error", (erro) => {
  console.log("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco de dados MedSolo feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

export default app;