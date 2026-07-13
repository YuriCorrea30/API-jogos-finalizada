import express from "express";
import cors from "cors";
import jogosRoutes from "./routes/jogos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/jogos", jogosRoutes);

export default app;