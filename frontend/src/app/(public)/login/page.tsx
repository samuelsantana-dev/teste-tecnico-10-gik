  /* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputText from "@/components/forms/InputText";
import { loginSchema } from "@/utils/validations";
import { login } from "@/services/api-login";
import { userStore } from "@/store/authStore";
export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const setUser = userStore((state) => state.setUser);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError({});

    const parsed = loginSchema.safeParse({ email, password });
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

      const response = await login(email, password);
      
      setUser({
        token: response.token,
        name: response.user.name,
        email: response.user.email,
        phone: response.user.phone
      })

      router.push("/products");
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login");
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
          Login
        </h1>
        {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
        <InputText 
        label="E-mail"
        placeholder="Digite seu e-mail"
        type="email"
        size="md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
        <InputText 
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        size="md"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

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