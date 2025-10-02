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


export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Nome deve ter no mínimo 3 caracteres")
      .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
    email: z.string().email("Email inválido"),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
      ),
    verifyPassword: z.string().regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
      ),
    phone: z.object({
      country: z
        .string()
        .min(1, "Código do país é obrigatório")
        .regex(/^\d+$/, "Código do país inválido"),
      ddd: z
        .string()
        .min(2, "DDD inválido")
        .max(3, "DDD inválido")
        .regex(/^\d+$/, "DDD deve conter apenas números"),
      number: z
        .string()
        .min(8, "Número inválido")
        .max(10, "Número inválido")
        .regex(/^\d+$/, "Número deve conter apenas números"),
    }),
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: "As senhas não conferem",
    path: ["verifyPassword"],
  });


export const productEditSchema = z.object({
  title: z.string().min(3, "Título deve ter no mínimo 3 caracteres"),
  description: z.string().min(5, "Descrição deve ter no mínimo 10 caracteres"),
})

export const productCreateSchema = z.object({
  title: z.string().min(3, "Título deve ter no mínimo 3 caracteres"),
  description: z.string().min(5, "Descrição deve ter no mínimo 10 caracteres"),
  // thumbnail: z.instanceof(File, "Arquivo inválido").refine((file) => file.size <= 5 * 1024 * 1024, "O arquivo deve ser menor que 5MB"),
})

export const url = "https://api-teste-front-production.up.railway.app";
