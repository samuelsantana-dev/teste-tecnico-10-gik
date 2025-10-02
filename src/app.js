import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import leadsRouter from "./routes/LeadRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/leads", leadsRouter);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
