/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputText from "@/components/forms/InputText";
import { createLeadApi } from "@/services/api-leads";
import { Loading } from "@/components/ui/Loading";
import ProtectedRoute from "@/components/ProtectedRoute";
import { schemaLeadCreateUpdate } from "@/utils/validations";
export default function CreateLead() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [message, setMessage] = useState("");
const [error, setError] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  setError({});

    const formData = {
    name: name,
    email: email,
    phone: phone,        
    job_title: jobTitle,
    birth_date: birthDate,
    message: message,
  };
    console.log("🚀 ~ handleSubmit ~ formData:", formData)

  const parsed = schemaLeadCreateUpdate.safeParse(formData);
  console.log("🚀 ~ handleSubmit ~ parsed:", parsed)

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    parsed.error.issues.forEach((issue) => {
      const path = issue.path.join("."); 
      fieldErrors[path] = issue.message;
    });
    setError(fieldErrors);
    setLoading(false);
    return;
  }
    try {
      setLoading(true);

      await createLeadApi({
        name: name,
        email: email,
        phone: phone,
        job_title: jobTitle,
        birth_date: birthDate,
        message: message
      })
      
      router.push("/leads");
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }

   if (loading) {
      return (
       <Loading />
      );
    }
  return (
    <ProtectedRoute>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Criar um novo Lead
        </h1>

        {/* {error && (
          <p className="mb-3 text-sm text-red-500 text-center">{error.form}</p>
        )} */}

        <InputText 
          label="Nome"
          placeholder="Digite seu nome"
          type="text"
          size="md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error.name}
        />

        <InputText 
          label="Email"
          placeholder="Digite seu email"
          type="email"
          size="md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error.email}
        />

        <InputText 
          label="Telefone"
          placeholder="Digite seu telefone"
          type="text"
          size="md"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={error.phone}
        />

        <InputText 
          label="Cargo"
          placeholder="Digite seu cargo"
          type="text"
          size="md"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          error={error.job_title}
        />

        <InputText 
          label="Data de nascimento"
          placeholder="Digite sua data de nascimento (YYYY-MM-DD)"
          type="text"
          size="md"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          error={error.birth_date}
        />

        <InputText 
          label="Mensagem"
          placeholder="Digite sua mensagem"
          type="text"
          size="md"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={error.message}
        />



        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Criando..." : "Criar Lead"}
        </button>
      </form>
    </div>
    </ProtectedRoute>
  );
}
