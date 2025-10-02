import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import leadsRouter from "./routes/LeadRoutes.js";
import authRouter from "./routes/Auth.js";
dotenv.config();
const app = express();
app.use(cors({
  origin: [
    'https://teste-tecnico-10-gik.vercel.app',
    'http://localhost:3000' 
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cors());
app.use(express.json());

app.use("/leads", leadsRouter);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
