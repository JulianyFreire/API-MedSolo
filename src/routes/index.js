import express from "express";
import plantas from "./plantaRoutes.js";
import usuarios from "./usuarioRoutes.js";
import historicos from "./historicoRoutes.js";
import sensores from "./sensorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "MedSolo" });
  });

  app.use(
    express.json(),
    plantas,
    usuarios,
    historicos,
    sensores,
  );
};

export default routes;  