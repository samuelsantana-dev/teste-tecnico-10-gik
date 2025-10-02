/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputText from "@/components/forms/InputText";
import { createProductApi } from "@/services/api-products";
import { Loading } from "@/components/ui/Loading";
import ProtectedRoute from "@/components/ProtectedRoute";
export default function CreateProduct() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);

      await createProductApi(title, description, thumbnail   );
      
      router.push("/products");
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
          Criar um novo produto
        </h1>

        {error && (
          <p className="mb-3 text-sm text-red-500 text-center">{error}</p>
        )}

        <InputText 
        label="Titulo do produto"
        placeholder="Digite o titulo"
        type="title"
        size="md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <InputText 
        label="Descrição do produto"
        placeholder="Digite a descrição"
        type="description"
        size="md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="thumbnail">Clique aqui para enviar o arquivo</label>
        <input
        className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        type="file"
        id="thumbnail"
        accept="image/*"
        onChange={(e) => setThumbnail(e.target.files ? e.target.files[0] : null)}
      />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Criando..." : "Criar produto"}
        </button>
      </form>
    </div>
    </ProtectedRoute>
  );
}
