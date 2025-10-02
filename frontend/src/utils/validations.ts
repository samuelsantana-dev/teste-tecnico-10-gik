import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Digite um email válido"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
      "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
    ),
});


export const schemaLeadCreateUpdate = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Telefone inválido").max(15, "Telefone inválido").regex(/^\+?[\d\s()-]+$/, "Telefone deve conter apenas números e caracteres válidos"),
  birth_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data de nascimento deve estar no formato YYYY-MM-DD")
    .refine(
      (val) => !isNaN(Date.parse(val)),
      "Data de nascimento inválida"
    ),
  job_title: z.string().min(3, "Cargo deve ter no mínimo 3 caracteres"),
  message: z.string().min(5, "Mensagem deve ter no mínimo 5 caracteres"),
});


export const url = "https://teste-tecnico-10-api.vercel.app/";
