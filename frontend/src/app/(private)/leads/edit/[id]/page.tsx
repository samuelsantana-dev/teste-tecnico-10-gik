/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import InputText from "@/components/forms/InputText";
import { editLeadApi, getUnicLeadApi } from "@/services/api-leads";
import { Loading } from "@/components/ui/Loading";
import { schemaLeadCreateUpdate } from "@/utils/validations";
import ProtectedRoute from "@/components/ProtectedRoute";
export default function EditLead() {
  const router = useRouter();
  const {id}= useParams<{id: string}>()
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
  // setError(null);

  const formData = {
    name: name,
    email: email,
    phone: phone,        
    job_title: jobTitle,
    birth_date: birthDate,
    message: message,
  };

  const parsed = schemaLeadCreateUpdate.safeParse(formData);
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

    await editLeadApi(id, formData);

    router.push("/leads");
  } catch (err: any) {
    setError(err.message || "Erro ao editar produto");
  } finally {
    setLoading(false);
  }
}



  useEffect(() => {
    async function fetchLead(){
        try {
            const responseLead = await getUnicLeadApi(id);
            setName(responseLead.name || "");
            setEmail(responseLead.email || "");
            setPhone(responseLead.phone || "");
            setJobTitle(responseLead.job_title || "");
            setMessage(responseLead.message || "");

             if (responseLead.birth_date) {
              const dateOnly = responseLead.birth_date.split('T')[0];
              setBirthDate(dateOnly);
            } else {
              setBirthDate("");
            }
            // setBirthDate(responseLead.birth_date || "");
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }

    fetchLead();
  }, []);

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
          Editar um produto
        </h1>

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
                type="date"
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
          {loading ? "Editando..." : "Editar produto"}
        </button>
      </form>
    </div>
    </ProtectedRoute>
  );
}
