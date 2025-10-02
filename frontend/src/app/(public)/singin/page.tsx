/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputText from "@/components/forms/InputText";
import {  loginSchema } from "@/utils/validations";
import {  registerUser } from "@/services/api-login";
import { userStore } from "@/store/authStore";
export default function RegisterPage() {
  const router = useRouter();
  const setUser = userStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError({});

    const parsed = loginSchema.safeParse({
      email,
      password,
    });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path.join("."); 
        fieldErrors[path] = issue.message;
      });
      setError(fieldErrors);
      return;
    }


    try {
      setLoading(true);

      const response = await registerUser(parsed.data);

      setUser({
        token: response.token,
      })
      
      router.push("/leads");
    } catch (err: any) {
      setError(err.message || "Erro ao fazer cadastro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Registre-se
        </h1>

        {errors && (
          <p className="mb-3 text-sm text-red-500 text-center">{errors.form}</p>
        )}


      <InputText
        label="Email"
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
     

      <InputText
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

