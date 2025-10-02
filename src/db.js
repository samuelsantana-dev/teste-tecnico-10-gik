import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB conectado com sucesso");
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error.message);
    process.exit(1);
  }
}
