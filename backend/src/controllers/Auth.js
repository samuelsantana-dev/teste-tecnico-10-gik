import User from "../models/Auth.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "sua_chave_secreta"; 

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Usuário já existe" });

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Senha inválida" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login realizado com sucesso!", token });
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor", error: err.message });
  }
};
